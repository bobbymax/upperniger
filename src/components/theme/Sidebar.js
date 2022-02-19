import React, { useState } from "react";
import AvatarCard from "./commons/AvatarCard";
import * as Icon from "react-feather";
import { Link, useLocation } from "react-router-dom";
import { canAccessModule } from "../../utils/helpers/functions/access";

const Sidebar = ({ toggle, navigation, auth = undefined, isAdmin = false }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [active, setActive] = useState(0);

  const location = useLocation();

  const handleMenu = (id) => {
    if (isToggled && active > 0 && active !== id) {
      setActive(id);
    } else {
      setIsToggled(!isToggled);
      setActive(id);
    }
  };

  return (
    <>
      <header className={`main-nav ${toggle && "close_icon"}`}>
        <AvatarCard />
        <nav>
          <div className="main-navbar">
            <div className="left-arrow" id="left-arrow">
              <Icon.ArrowLeft />
            </div>
            <div id="mainnav">
              <ul className="nav-menu custom-scrollbar">
                <li className="back-btn">
                  <div className="mobile-back text-end">
                    <span>Back</span>
                    <i className="fa fa-angle-right ps-2" aria-hidden="true" />
                  </div>
                </li>
                <li className="sidebar-main-title">
                  <div>
                    <h6>General </h6>
                  </div>
                </li>
                <li className="dropdown">
                  <Link
                    className={`nav-link menu-title ${
                      location.pathname === "/" && "active"
                    }`}
                    to="/"
                  >
                    <Icon.Home />
                    <span>Dashboard</span>
                  </Link>
                </li>

                {navigation.length > 0 &&
                  navigation.map(
                    (nav, i) =>
                      nav.type === "application" && (
                        <li className="dropdown" key={i}>
                          {nav.children.length > 0 ? (
                            <>
                              <Link
                                className={`nav-link menu-title ${
                                  location.pathname === nav.path && "active"
                                }`}
                                to="#"
                                onClick={() => handleMenu(nav.id)}
                              >
                                <Icon.LifeBuoy />
                                <span>{nav.code}</span>
                                {nav.children.length > 0 && (
                                  <div className="according-menu">
                                    <i
                                      className={`fa ${
                                        isToggled && active === nav.id
                                          ? "fa-angle-down"
                                          : "fa-angle-right"
                                      }`}
                                    ></i>
                                  </div>
                                )}
                              </Link>
                              <ul
                                className="nav-submenu menu-content"
                                style={{
                                  display:
                                    isToggled && active === nav.id
                                      ? "block"
                                      : "none",
                                }}
                              >
                                {nav.children.map((child, i) =>
                                  isAdmin ? (
                                    <li key={i}>
                                      <Link
                                        to={child.path}
                                        className={
                                          location.pathname === child.path
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        {child.name}
                                      </Link>
                                    </li>
                                  ) : (
                                    canAccessModule(child, auth) && (
                                      <li key={i}>
                                        <Link
                                          to={child.path}
                                          className={
                                            location.pathname === child.path
                                              ? "active"
                                              : ""
                                          }
                                        >
                                          {child.name}
                                        </Link>
                                      </li>
                                    )
                                  )
                                )}
                              </ul>
                            </>
                          ) : (
                            <Link className="nav-link menu-title" to={nav.path}>
                              <Icon.LifeBuoy />
                              <span>{nav.code}</span>
                            </Link>
                          )}
                        </li>
                      )
                  )}

                {isAdmin && (
                  <>
                    <li className="sidebar-main-title">
                      <div>
                        <h6>Administration </h6>
                      </div>
                    </li>
                    <li className="dropdown">
                      <Link
                        className={`nav-link menu-title ${
                          location.pathname === "/modules" && "active"
                        }`}
                        to="/modules"
                      >
                        <Icon.Settings />
                        <span>Modules</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        className={`nav-link menu-title ${
                          location.pathname === "/settings" && "active"
                        }`}
                        to="/settings"
                      >
                        <Icon.Settings />
                        <span>Settings</span>
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        className={`nav-link menu-title ${
                          location.pathname === "/configuration" && "active"
                        }`}
                        to="/configuration"
                      >
                        <Icon.Settings />
                        <span>Configuration</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="right-arrow" id="right-arrow">
              <Icon.ArrowRight />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Sidebar;
