/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../../components/theme/Footer";
import Header from "../../components/theme/Header";
import Sidebar from "../../components/theme/Sidebar";
import { canAccessModule } from "../../utils/helpers/functions/access";
import { collectAll } from "../../utils/helpers/functions/controllers";
import useApi from "../../utils/hooks/useApi";
import { useUser } from "../../utils/hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const auth = useUser();
  const { data: modules, request: fetch } = useApi(collectAll);

  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState([]);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (auth !== null) {
      fetch("modules");
    }
  }, [auth]);

  useEffect(() => {
    if (modules.length > 0) {
      const newMenu = [];
      modules.map((nav) => {
        if (auth.administrator) {
          return newMenu.push(nav);
        } else {
          return canAccessModule(nav, auth) && newMenu.push(nav);
        }
      });

      setMenu(newMenu);
    }
  }, [modules]);

  return (
    <>
      <div>
        {/* Loader starts*/}
        {/* <PageLoader /> */}
        {/* Loader ends*/}
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
          <Header toggle={isOpen} handleToggle={toggleSideBar} />
          <div className="page-body-wrapper sidebar-icon">
            <Sidebar
              toggle={isOpen}
              navigation={menu}
              auth={auth}
              isAdmin={auth && auth.administrator}
            />
            {/* dashboard-2-main */}
            <div className="page-body">
              <div className="container-fluid">
                {auth ? children : <Navigate to="/login" />}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedRoute;
