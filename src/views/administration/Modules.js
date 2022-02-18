/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  alter,
  collectAll,
  destroy,
  store,
} from "../../utils/helpers/functions/controllers";
import * as Icon from "react-feather";
import useApi from "../../utils/hooks/useApi";
import TableCard from "../../components/theme/commons/TableCard";
import BreadCrumb from "../../components/theme/commons/BreadCrumb";
import TextInputField from "../../components/form/TextInputField";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";

import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardHeader from "../../components/theme/commons/cards/CustomCardHeader";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";

const Modules = () => {
  const initialState = {
    id: 0,
    name: "",
    code: "",
    icon: "",
    path: "",
    parentId: 0,
    quickAccess: 0,
    type: "",
    generatePermissions: 0,
    component: "",
    access: [],
    roles: [],
  };

  const { data: mods, setData: setMods, request: fetch } = useApi(collectAll);
  const {
    data: roles,
    setData: setRoles,
    request: fetchRoles,
  } = useApi(collectAll);

  const [state, setState] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);

  const columns = [
    { key: "name", label: "Name" },
    { key: "path", label: "Path" },
    { key: "type", label: "Type" },
  ];

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
      icon: data.icon,
      path: data.path,
      parentId: data.parentId,
      quickAccess: data.quickAccess,
      type: data.type,
      generatePermissions: data.generatePermissions,
      component: data.component,
      access: data.roles,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      code: state.code,
      icon: state.icon,
      path: state.path,
      parentId: state.parentId,
      quickAccess: state.quickAccess,
      type: state.type,
      generatePermissions: state.generatePermissions,
      component: state.component,
      roles: state.roles,
    };

    if (update) {
      alter("modules", state.id, data)
        .then((res) => {
          const mod = res.data.data;
          setMods(
            mods.map((module) => {
              if (module.id == mod.id) {
                return mod;
              }

              return module;
            })
          );
          console.log(res.data.data);
          setState(initialState);
          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("modules", data)
        .then((res) => {
          setMods([res.data.data, ...mods]);
          setState(initialState);
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("modules", state.id)
      .then((res) => {
        setMods(mods.filter((mod) => mod.id !== res.data.data.id));
        setState(initialState);
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const notContainsRole = (obj, lists) => {
    const inArray = lists.some((list) => list.id !== obj.id);

    if (inArray) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (update && state.access.length > 0) {
      const newData =
        roles.length > 0 &&
        roles.filter((role) => notContainsRole(role, state.access) && role);

      setRoles(newData);
    } else {
      fetchRoles("roles");
    }
  }, [update, state.access]);

  useEffect(() => {
    try {
      fetch("modules");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      fetchRoles("roles");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <BreadCrumb pageName={`Modules`} handleDrawer={handleDrawer} />

      {openModal && (
        <div className="row">
          <div className="col-sm-12">
            <CustomCard>
              <CustomCardHeader>
                <h5 className="mb-3">{update ? "Update" : "Add"} Module</h5>
                <ul>
                  {state.access.length > 0 &&
                    state.access.map((role) => (
                      <li key={role.id}>
                        <div className="btn btn-primary">
                          {role.name} <Icon.X size={14} />
                        </div>
                      </li>
                    ))}
                </ul>
              </CustomCardHeader>
              <CustomCardBody>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-7">
                      <TextInputField
                        label="Name"
                        value={state.name}
                        onChange={(e) =>
                          setState({ ...state, name: e.target.value })
                        }
                        placeholder="Enter Module Name"
                      />
                    </div>
                    <div className="col-md-5">
                      <TextInputField
                        label="Code"
                        value={state.code}
                        onChange={(e) =>
                          setState({ ...state, code: e.target.value })
                        }
                        placeholder="Enter Module Code"
                      />
                    </div>
                    <div className="col-md-4">
                      <CustomSelect
                        label="Parent"
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
                          label="Select Parent"
                          disabled
                        />
                        <CustomSelectOptions value={0} label="None" />

                        {mods.map((mod) => (
                          <CustomSelectOptions
                            key={mod.id}
                            value={mod.id}
                            label={mod.name}
                          />
                        ))}
                      </CustomSelect>
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Component"
                        value={state.component}
                        onChange={(e) =>
                          setState({ ...state, component: e.target.value })
                        }
                        placeholder="Enter Module Component"
                      />
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Icon"
                        value={state.icon}
                        onChange={(e) =>
                          setState({ ...state, icon: e.target.value })
                        }
                        placeholder="Enter Module Icon"
                      />
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Path"
                        value={state.path}
                        onChange={(e) =>
                          setState({ ...state, path: e.target.value })
                        }
                        placeholder="Enter Module Path"
                      />
                    </div>
                    <div className="col-md-4">
                      <CustomSelect
                        label="Type"
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
                          label="Select Module Type"
                        />

                        {["Application", "Module", "Page"].map((typ, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={typ.toLowerCase()}
                            label={typ}
                          />
                        ))}
                      </CustomSelect>
                    </div>

                    <div className="col-md-4">
                      <CustomSelect
                        label="Generate Permissions"
                        value={state.generatePermissions}
                        onChange={(e) =>
                          setState({
                            ...state,
                            generatePermissions: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value=""
                          label="Generate Permissions"
                        />

                        {["Yes", "No"].map((perm, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={perm === "Yes" ? 1 : 0}
                            label={perm}
                          />
                        ))}
                      </CustomSelect>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group m-t-15 m-checkbox-inline mb-0">
                        {roles.length > 0 &&
                          roles.map((role) => (
                            <div
                              key={role.id}
                              className="checkbox checkbox-dark"
                            >
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
      )}

      <div className="row">
        <TableCard
          columns={columns}
          rows={mods}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};
export default Modules;
