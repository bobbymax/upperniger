import React, { useEffect, useState } from "react";
import {
  collectAll,
  store,
  alter,
  destroy,
} from "../../utils/helpers/functions/controllers";
import BreadCrumb from "../../components/theme/commons/BreadCrumb";
import TableCard from "../../components/theme/commons/TableCard";
import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardHeader from "../../components/theme/commons/cards/CustomCardHeader";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";
import TextInputField from "../../components/form/TextInputField";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";

const Departments = () => {
  const initialState = {
    id: 0,
    name: "",
    code: "",
    department_code: "",
    type: "",
    parentId: 0,
  };

  const [departments, setDepartments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [state, setState] = useState(initialState);

  const handleDrawer = () => {
    setOpenModal(!openModal);
  };

  const handleUpdate = (data) => {
    setUpdate(true);
    setOpenModal(true);

    setState({
      ...state,
      id: data.id,
      name: data.name,
      code: data.code,
      department_code:
        data.department_code === null ? "" : data.department_code,
      type: data.type,
      parentId: data.parentId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      code: state.code,
      department_code: state.department_code,
      type: state.type,
      parentId: state.parentId,
    };

    if (update) {
      alter("departments", state.id, data)
        .then((res) => {
          setDepartments(
            departments.map((department) => {
              if (department.id === res.data.data.id) {
                return res.data.data;
              }

              return department;
            })
          );

          setState({
            id: 0,
            name: "",
            code: "",
            department_code: "",
            type: "",
            parentId: 0,
          });

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("departments", data)
        .then((res) => {
          setDepartments([res.data.data, ...departments]);
          setState({
            id: 0,
            name: "",
            code: "",
            department_code: "",
            type: "",
            parentId: 0,
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("departments", state.id)
      .then((res) => {
        setDepartments(
          departments.filter((department) => department.id !== res.data.data.id)
        );
        setState({
          id: 0,
          name: "",
          code: "",
          department_code: "",
          type: "",
          parentId: 0,
        });
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "code", label: "Code" },
    { key: "type", lable: "Type" },
  ];

  useEffect(() => {
    collectAll("departments")
      .then((res) => {
        setDepartments(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <BreadCrumb pageName={"Departments"} handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Department</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <TextInputField
                          label="Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          placeholder="Enter Department Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Code"
                          value={state.code}
                          onChange={(e) =>
                            setState({ ...state, code: e.target.value })
                          }
                          placeholder="Enter Department Code"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Payment Code"
                          value={state.department_code}
                          onChange={(e) =>
                            setState({
                              ...state,
                              department_code: e.target.value,
                            })
                          }
                          placeholder="Enter Payment Code"
                        />
                      </div>
                      <div className="col-md-6">
                        <CustomSelect
                          label="Department Type"
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
                            label="Select Department Type"
                            disabled
                          />

                          {[
                            { key: "directorate", label: "Directorate" },
                            { key: "division", label: "Division" },
                            { key: "department", label: "Department" },
                            { key: "unit", label: "Unit" },
                          ].map((opt, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={opt.key}
                              label={opt.label}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-6">
                        <CustomSelect
                          label="Department Parent"
                          value={state.parentId}
                          onChange={(e) =>
                            setState({
                              ...state,
                              parentId: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Department Parent"
                            disabled
                          />

                          <CustomSelectOptions value={0} label="None" />

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
          rows={departments}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Departments;
