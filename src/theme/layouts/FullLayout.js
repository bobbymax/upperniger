import React, { useEffect, useState } from "react";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import { useStyles } from "../styles";
import Navigation from "../../components/layout/Navigation";
import { AccountCircle } from "@material-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useUser } from "../../utils/hooks/useUser";
import { logout } from "../../utils/helpers/functions/controllers";
import routes from "../../routes";

const FullLayout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const dropOpen = Boolean(anchorEl);
  const auth = useUser();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (matches) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matches]);

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(
          classes.appBar,
          open ? classes.appBarOpened : classes.appBarCollapsed
        )}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome {auth && auth.firstname + " " + auth.surname}
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={dropOpen}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src={open ? logo1 : logo2}
            alt={"Orbit Logo"}
          />
        </div>
        <List className={clsx(classes.navigationList, classes.navigationText)}>
          {routes.map((route, index) => {
            if (route.menu) {
              return (
                <Navigation
                  key={index}
                  label={route.label}
                  icon={route.icon}
                  path={route.path}
                  open={open}
                  component={route.component}
                />
              );
            } else {
              return null;
            }
          })}
        </List>
      </Drawer>
      <div
        className={clsx(
          classes.mainContainer,
          open ? classes.appBarOpened : classes.appBarCollapsed
        )}
      >
        {auth ? children : <Navigate to="/login" />}
      </div>
    </>
  );
};

export default FullLayout;
