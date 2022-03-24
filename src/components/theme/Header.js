import React from "react";
import logoDark from "../../assets/images/project.png";
import * as Icon from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ toggle, handleToggle }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className={`page-main-header ${toggle && "close_icon"}`}>
        <div className="main-header-right row m-0">
          <div className="main-header-left">
            <div className="logo-wrapper">
              <Link to="/">
                <img className="img-fluid" src={logoDark} alt="brand logo" />
              </Link>
            </div>
            <div className="dark-logo-wrapper">
              <Link to="/">
                <img className="img-fluid" src={logoDark} alt="dark logo" />
              </Link>
            </div>
            <div className="toggle-sidebar" onClick={() => handleToggle()}>
              <Icon.AlignCenter
                className="status_toggle middle"
                id="sidebar-toggle"
              />
            </div>
          </div>
          <div className="left-menu-header col">
            <ul>
              {/* <li>
                <form className="form-inline search-form">
                  <div className="search-bg">
                    <i className="fa fa-search" />
                    <input
                      className="form-control-plaintext"
                      placeholder="Search here....."
                    />
                  </div>
                </form>
                <span className="d-sm-none mobile-search search-bg">
                  <i className="fa fa-search" />
                </span>
              </li> */}
            </ul>
          </div>
          <div className="nav-right col pull-right right-menu p-0">
            <ul className="nav-menus">
              {/* <li className="onhover-dropdown">
                <div className="bookmark-box">
                  <Icon.Star />
                </div>
                <div className="bookmark-dropdown onhover-show-div">
                  <div className="form-group mb-0">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-search" />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search for bookmark..."
                      />
                    </div>
                  </div>
                  <ul className="m-t-5">
                    <li className="add-to-bookmark">
                      <Icon.Inbox className="bookmark-icon" />
                      Email
                      <span className="pull-right">
                        <Icon.Star />
                      </span>
                    </li>
                    <li className="add-to-bookmark">
                      <Icon.MessageSquare className="bookmark-icon" />
                      Chat
                      <span className="pull-right">
                        <Icon.Star />
                      </span>
                    </li>
                    <li className="add-to-bookmark">
                      <Icon.Command className="bookmark-icon" />
                      Feather Icon
                      <span className="pull-right">
                        <Icon.Star />
                      </span>
                    </li>
                    <li className="add-to-bookmark">
                      <Icon.Airplay className="bookmark-icon" />
                      Widgets
                      <span className="pull-right">
                        <Icon.Star />
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="onhover-dropdown">
                <div className="notification-box">
                  <Icon.Bell />
                  <span className="dot-animated" />
                </div>
                <ul className="notification-dropdown onhover-show-div">
                  <li>
                    <p className="f-w-700 mb-0">
                      You have 3 Notifications
                      <span className="pull-right badge badge-primary badge-pill">
                        4
                      </span>
                    </p>
                  </li>
                  <li className="noti-primary">
                    <div className="media">
                      <span className="notification-bg bg-light-primary">
                        <Icon.Activity />
                      </span>
                      <div className="media-body">
                        <p>Delivery processing </p>
                        <span>10 minutes ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-secondary">
                    <div className="media">
                      <span className="notification-bg bg-light-secondary">
                        <Icon.CheckCircle />
                      </span>
                      <div className="media-body">
                        <p>Order Complete</p>
                        <span>1 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-success">
                    <div className="media">
                      <span className="notification-bg bg-light-success">
                        <Icon.FileText />
                      </span>
                      <div className="media-body">
                        <p>Tickets Generated</p>
                        <span>3 hour ago</span>
                      </div>
                    </div>
                  </li>
                  <li className="noti-danger">
                    <div className="media">
                      <span className="notification-bg bg-light-danger">
                        <Icon.UserCheck />
                      </span>
                      <div className="media-body">
                        <p>Delivery Complete</p>
                        <span>6 hour ago</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="mode">
                  <i className="fa fa-moon-o" />
                </div>
              </li> */}
              <li className="onhover-dropdown p-0">
                <button
                  className="btn btn-primary-light"
                  type="button"
                  onClick={handleLogOut}
                >
                  <Icon.LogOut />
                  Log out
                </button>
              </li>
            </ul>
          </div>
          <div className="d-lg-none mobile-toggle pull-right w-auto">
            <Icon.MoreHorizontal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
