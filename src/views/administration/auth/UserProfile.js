import React from "react";
import TextInputField from "../../../components/form/TextInputField";
import BreadCrumb from "../../../components/theme/commons/BreadCrumb";
import CustomCard from "../../../components/theme/commons/cards/CustomCard";
import CustomCardBody from "../../../components/theme/commons/cards/CustomCardBody";
import CustomCardHeader from "../../../components/theme/commons/cards/CustomCardHeader";
import { useUser } from "../../../utils/hooks/useUser";

const UserProfile = () => {
  const auth = useUser();

  const handleDrawer = () => {
    console.log(auth);
  };

  return (
    <>
      <BreadCrumb pageName="User Profile" handleDrawer={handleDrawer} />

      <div className="row">
        <div className="col-md-4">
          <CustomCard>
            <CustomCardBody>
              <form>
                <div className="row mb-2">
                  <div className="profile-title">
                    <div className="media">
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          <img
                            className="img-70 rounded-circle"
                            alt="avatar"
                            src="../assets/images/user/7.jpg"
                          />
                        </div>
                        <div className="col-md-12">
                          <div className="media-body">
                            <h3 className="mb-1 f-20 txt-primary">
                              {auth &&
                                auth.firstname.toUpperCase() +
                                  " " +
                                  auth.surname.toUpperCase()}
                            </h3>
                            <p className="f-12">
                              {auth && auth.department !== null
                                ? auth.department.name.toUpperCase()
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-12">
                    <TextInputField
                      label="Staff Number"
                      value={auth && auth.staff_no}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Email Address"
                      value={auth && auth.email}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Mobile"
                      value={auth && auth.mobile}
                      disabled
                    />
                  </div>
                  {auth && auth.type !== "vendor" && (
                    <div className="col-md-12">
                      <TextInputField
                        label="Grade Level"
                        value={
                          auth &&
                          auth.grade_level_id > 0 &&
                          auth.type !== "vendor" &&
                          auth.grade_level.key
                        }
                        disabled
                      />
                    </div>
                  )}
                  <div className="col-md-12">
                    <TextInputField
                      label="Type"
                      value={auth && auth.type.toUpperCase()}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Staff Status"
                      value={auth && auth.status}
                      disabled
                    />
                  </div>
                </div>
              </form>
            </CustomCardBody>
          </CustomCard>
        </div>
        <div className="col-md-8">
          <CustomCard>
            <CustomCardHeader>
              <div className="row">
                <h5 className="mb-4">Company Details</h5>
                <div className="profile-title">
                  <div className="media">
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <img
                          className="img-70 rounded-circle"
                          alt="avatar"
                          src="../assets/images/user/7.jpg"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="media-body">
                          <h3 className="mb-1 f-20 txt-primary">
                            {auth && auth.company_id > 0
                              ? auth.company.name
                              : "NCDMB"}
                          </h3>
                          <p className="mb-0 f-12">COMPANY ADDRESS HERE</p>
                          <p className="mb-0 f-12">
                            WEBSITE HERE | CONTACT NUMBER
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardHeader>
            <CustomCardBody>
              <h6 className="mb-3">Team members</h6>
              <div className="customers d-inline-block avatar-group">
                <ul>
                  <li className="d-inline-block">
                    <img
                      className="img-70 rounded-circle"
                      src="../assets/images/user/3.jpg"
                      alt="avatar group"
                    />
                  </li>
                  <li className="d-inline-block">
                    <img
                      className="img-70 rounded-circle"
                      src="../assets/images/user/5.jpg"
                      alt="avatar group"
                    />
                  </li>
                  <li className="d-inline-block">
                    <img
                      className="img-70 rounded-circle"
                      src="../assets/images/user/1.jpg"
                      alt="avatar group"
                    />
                  </li>
                </ul>
              </div>
            </CustomCardBody>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
