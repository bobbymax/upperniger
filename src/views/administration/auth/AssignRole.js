/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import TextInputField from "../../../components/form/TextInputField";
import BreadCrumb from "../../../components/theme/commons/BreadCrumb";
import CustomCard from "../../../components/theme/commons/cards/CustomCard";
import CustomCardBody from "../../../components/theme/commons/cards/CustomCardBody";
import CustomCardHeader from "../../../components/theme/commons/cards/CustomCardHeader";
import TableCard from "../../../components/theme/commons/TableCard";
import {
  collectAll,
  store,
} from "../../../utils/helpers/functions/controllers";

const AssignRole = () => {
  const initialState = {
    id: 0,
    firstname: "",
    surname: "",
    email: "",
    staff_no: "",
    roles: [],
  };
  const [state, setState] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const columns = [
    { key: "firstname", label: "Firstname" },
    { key: "surname", label: "Surname" },
    { key: "email", label: "Email" },
  ];

  const assignRoleToUser = (staff) => {
    const rolesId = [];
    staff.roles.length > 0 && staff.roles.map((role) => rolesId.push(role.id));
    setState({
      ...state,
      id: staff.id,
      firstname: staff.firstname,
      surname: staff.surname,
      email: staff.email,
      staff_no: staff.staff_no,
      roles: rolesId,
    });
    setOpenModal(true);
    console.log(staff);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_id: state.id,
      roles: state.roles,
    };

    try {
      store("user/roles", data)
        .then((res) => {
          console.log(res.data.data);

          setUsers(
            users.filter((user) => {
              if (user.id == res.data.data.id) return res.data.data;

              return user;
            })
          );

          setOpenModal(false);
          setState(initialState);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDrawer = () => {
    console.log("alert");
  };

  useEffect(() => {
    try {
      collectAll("users")
        .then((res) => {
          const staff = [];

          const employees = res.data.data;

          employees.length > 0 &&
            employees.filter((emp) => emp.type !== "vendor" && staff.push(emp));

          setUsers(staff);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      collectAll("roles")
        .then((res) => {
          setRoles(res.data.data);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <BreadCrumb pageName="Assign Role to User" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <CustomCard>
            <CustomCardHeader>
              <h5>Assign Role to {state.firstname + " " + state.surname}</h5>
            </CustomCardHeader>
            <CustomCardBody>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <TextInputField
                      label="Email Address"
                      value={state.email}
                      onChange={(e) =>
                        setState({ ...state, email: e.target.value })
                      }
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-group m-t-15 m-checkbox-inline mb-0">
                      {roles.length > 0 &&
                        roles.map((role) => (
                          <div key={role.id} className="checkbox checkbox-dark">
                            <input
                              id={`roles-${role.id}`}
                              value={role.id}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  roles: [e.target.value, ...state.roles],
                                })
                              }
                              type="checkbox"
                            />
                            <label htmlFor={`roles-${role.id}`}>
                              {role.name}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <button type="submit" className={`btn btn-primary mt-4`}>
                      Submit
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-secondary mt-4"
                      onClick={() => {
                        setState(initialState);
                        setOpenModal(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </CustomCardBody>
          </CustomCard>
        </>
      )}

      <div className="row">
        <TableCard
          columns={columns}
          rows={users}
          assignRole={assignRoleToUser}
        />
      </div>
    </>
  );
};

export default AssignRole;
