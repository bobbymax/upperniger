/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  alter,
  collectAll,
  destroy,
  store,
} from "../../../utils/helpers/functions/controllers";
import TableCard from "../../../components/theme/commons/TableCard";
import BreadCrumb from "../../../components/theme/commons/BreadCrumb";
import CustomCard from "../../../components/theme/commons/cards/CustomCard";
import CustomCardHeader from "../../../components/theme/commons/cards/CustomCardHeader";
import CustomCardBody from "../../../components/theme/commons/cards/CustomCardBody";
import TextInputField from "../../../components/form/TextInputField";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomSelectOptions from "../../../components/form/CustomSelectOptions";

const Staff = () => {
  const initialState = {
    id: 0,
    firstname: "",
    middlename: "",
    surname: "",
    staff_no: "",
    email: "",
    grade_level_id: 0,
    department_id: 0,
    type: "",
    roles: [],
  };
  const [employees, setEmployees] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [state, setState] = useState(initialState);
  const [levels, setLevels] = useState([]);
  const [departments, setDepartments] = useState([]);

  const columns = [
    { label: "Firstname", key: "firstname" },
    { label: "Surname", key: "surname" },
    { label: "Staff Number", key: "staff_no" },
    { label: "Email", key: "email" },
    { label: "Type", key: "type" },
  ];

  const handleUpdate = (data) => {
    setUpdate(true);
    setOpenModal(true);
    setState({
      ...state,
      id: data.id,
      firstname: data.firstname,
      middlename: data.middlename,
      surname: data.surname,
      staff_no: data.staff_no,
      email: data.email,
      grade_level_id: data.grade_level_id,
      department_id: data.department_id,
      type: data.type,
      roles: data.roles,
    });
  };

  const handleDelete = (id) => {
    destroy("users", state.id)
      .then((res) => {
        setEmployees(
          employees.filter((staff) => staff.id !== res.data.data.id)
        );
        setState({
          id: 0,
          firstname: "",
          middlename: "",
          surname: "",
          staff_no: "",
          email: "",
          grade_level_id: 0,
          department_id: 0,
          type: "",
          roles: [],
        });
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err.message));
  };

  const handleDrawer = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: state.firstname,
      middlename: state.middlename,
      surname: state.surname,
      staff_no: state.staff_no,
      email: state.email,
      grade_level_id: state.grade_level_id,
      department_id: state.department_id,
      type: state.type,
    };

    if (update) {
      alter("users", state.id, data)
        .then((res) => {
          setEmployees(
            employees.map((staff) => {
              if (staff.id === res.data.data.id) {
                return res.data.data;
              }

              return staff;
            })
          );

          setState({
            id: 0,
            firstname: "",
            middlename: "",
            surname: "",
            staff_no: "",
            email: "",
            grade_level_id: 0,
            department_id: 0,
            type: "",
            roles: [],
          });

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("users", data)
        .then((res) => {
          setEmployees([res.data.data, ...employees]);
          setState({
            id: 0,
            firstname: "",
            middlename: "",
            surname: "",
            staff_no: "",
            email: "",
            grade_level_id: 0,
            department_id: 0,
            type: "",
            roles: [],
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  // const addRolesToUser = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     user_id: state.id,
  //     roles: state.roles,
  //   };

  //   store("user/roles", data)
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setState({
  //         ...state,
  //         roles: [],
  //       });
  //       setOpenRolesModal(false);
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // const handleChange = (e) => {
  //   setState({
  //     ...state,
  //     roles: e.target.value,
  //   });
  // };

  useEffect(() => {
    collectAll("users")
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    collectAll("gradeLevels")
      .then((res) => {
        setLevels(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    collectAll("departments")
      .then((res) => {
        setDepartments(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // useEffect(() => {
  //   collectAll("roles")
  //     .then((res) => setRoles(res.data.data))
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <>
      <BreadCrumb pageName="Staff" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add New"} Staff</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                        <TextInputField
                          label="First Name"
                          value={state.firstname}
                          onChange={(e) =>
                            setState({ ...state, firstname: e.target.value })
                          }
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Middlename"
                          value={state.middlename}
                          onChange={(e) =>
                            setState({ ...state, middlename: e.target.value })
                          }
                          placeholder="Enter Middlename"
                        />
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Surname"
                          value={state.surname}
                          onChange={(e) =>
                            setState({ ...state, surname: e.target.value })
                          }
                          placeholder="Enter Surname"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Staff Number"
                          value={state.staff_no}
                          onChange={(e) =>
                            setState({ ...state, staff_no: e.target.value })
                          }
                          placeholder="Enter Staff Number"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextInputField
                          label="Email"
                          type="email"
                          value={state.email}
                          onChange={(e) =>
                            setState({ ...state, email: e.target.value })
                          }
                          placeholder="Enter Staff Email"
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Grade Level"
                          value={state.grade_level_id}
                          onChange={(e) =>
                            setState({
                              ...state,
                              grade_level_id: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value={0}
                            label="Select Grade Level"
                            disabled
                          />
                          {levels.length > 0 &&
                            levels.map((level) => (
                              <CustomSelectOptions
                                key={level.id}
                                value={level.id}
                                label={level.key}
                              />
                            ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-8">
                        <CustomSelect
                          label="Department"
                          value={state.department_id}
                          onChange={(e) =>
                            setState({
                              ...state,
                              department_id: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value={0}
                            label="Select Department"
                            disabled
                          />
                          {departments.length > 0 &&
                            departments.map((dept) => (
                              <CustomSelectOptions
                                key={dept.id}
                                value={dept.id}
                                label={dept.name}
                              />
                            ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-4">
                        <CustomSelect
                          label="Staff Type"
                          value={state.type}
                          onChange={(e) =>
                            setState({
                              ...state,
                              type: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Staff Type"
                            disabled
                          />
                          {["Permanent", "Contract", "Secondment"].map(
                            (typ, i) => (
                              <CustomSelectOptions
                                key={i}
                                value={typ.toLowerCase()}
                                label={typ}
                              />
                            )
                          )}
                        </CustomSelect>
                      </div>
                      <div className="col-md-12 mt-3">
                        <button
                          type="submit"
                          className={`btn btn-primary mt-4`}
                        >
                          Submit
                        </button>{" "}
                        <button
                          type="button"
                          className="btn btn-secondary mt-4"
                          onClick={() => {
                            setState(initialState);
                            setUpdate(false);
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
            </div>
          </div>
        </>
      )}

      <div className="row">
        <TableCard
          columns={columns}
          rows={employees}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Staff;
