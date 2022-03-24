import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import avatar from "../../../assets/new/images/dashboard/1.png";
import { useUser } from "../../../utils/hooks/useUser";

const AvatarCard = () => {
  const auth = useUser();

  return (
    <>
      <div className="sidebar-user text-center">
        <Link className="setting-primary" to="/auth/profile">
          <Icon.Settings />
        </Link>
        <img
          className="img-90 rounded-circle"
          src={avatar}
          alt="avatar profile"
        />
        <div className="badge-bottom">
          <span className="badge badge-primary">New</span>
        </div>
        <a href="user-profile.html">
          <h6 className="mt-3 f-14 f-w-600">
            {auth && auth.firstname + " " + auth.surname}
          </h6>
        </a>
        <p className="mb-0 font-roboto">
          {auth && auth.department !== null && auth.department.code}
        </p>
        <ul>
          <li>
            <span>2 year</span>
            <p>Experince</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AvatarCard;
