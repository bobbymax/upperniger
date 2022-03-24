import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

const BreadCrumb = ({ pageName, handleDrawer = undefined }) => {
  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3>{pageName}</h3>
            {/* <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Forms </li>
              <li className="breadcrumb-item">Form Controls</li>
              <li className="breadcrumb-item active">Validation Forms</li>
            </ol> */}
          </div>
          <div className="col-sm-6">
            {/* Bookmark Start*/}
            <div className="bookmark">
              <ul>
                <li>
                  <Link to="#" onClick={() => handleDrawer()}>
                    <Icon.Plus />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Bookmark Ends*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
