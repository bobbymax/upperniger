/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  alter,
  collectAll,
  destroy,
  store,
} from "../../utils/helpers/functions/controllers";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import useApi from "../../utils/hooks/useApi";

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
    manifests: [],
  };

  const initialManifest = {
    name: "",
    input_type: "",
    dependency: "",
    grid: 0,
    defaultValue: "",
    placeholder: "",
    details: "",
    browse: false,
    read: false,
    edit: false,
    add: false,
    delete: false,
  };

  const { data: mods, setData: setMods, request: fetch } = useApi(collectAll);

  const [state, setState] = useState(initialState);
  const [manifest, setManifest] = useState(initialManifest);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [addManifest, setAddManifest] = useState(false);

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
      manifests: state.manifests,
    };

    if (update) {
      alter("modules", state.id, data)
        .then((res) => {
          setMods(
            mods.map((module) => {
              if (module.id === res.data.data.id) {
                return res.data.data;
              }

              return module;
            })
          );
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

  const handleAddManifest = () => {
    setState({
      ...state,
      manifests: [manifest, ...state.manifests],
    });

    setManifest(initialManifest);
    setAddManifest(false);
  };

  useEffect(() => {
    try {
      fetch("modules");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3>Modules</h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Forms </li>
              <li className="breadcrumb-item">Form Controls</li>
              <li className="breadcrumb-item active">Validation Forms</li>
            </ol>
          </div>
          <div className="col-sm-6">
            {/* Bookmark Start*/}
            <div className="bookmark">
              <ul>
                <li>
                  <Link to="#" onClick={handleDrawer}>
                    <Icon.Plus />
                  </Link>
                </li>
              </ul>
            </div>
            {/* Bookmark Ends*/}
          </div>
        </div>
      </div>

      {openModal && (
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>{update ? "Update" : "Add"} Module</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-7">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Module Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="form-label">Code</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Module Code"
                          value={state.code}
                          onChange={(e) =>
                            setState({ ...state, code: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Parent</label>
                        <select
                          className="form-select btn-square digits"
                          value={state.parentId}
                          onChange={(e) =>
                            setState({ ...state, parentId: e.target.value })
                          }
                        >
                          <option value={0}>None</option>
                          {mods.map((mod) => (
                            <option key={mod.id} value={mod.id}>
                              {mod.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Component</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Module Component"
                          value={state.component}
                          onChange={(e) =>
                            setState({ ...state, component: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Icon</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Module Icon"
                          value={state.icon}
                          onChange={(e) =>
                            setState({ ...state, icon: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Path</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Module Path"
                          value={state.path}
                          onChange={(e) =>
                            setState({ ...state, path: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">Type</label>
                        <select
                          className="form-select btn-square digits"
                          value={state.type}
                          onChange={(e) =>
                            setState({ ...state, type: e.target.value })
                          }
                        >
                          <option value="">Select Module Type</option>
                          {["Application", "Module", "Page"].map((typ, i) => (
                            <option key={i} value={typ.toLowerCase()}>
                              {typ}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="form-label">
                          Generate Permissions
                        </label>
                        <select
                          className="form-select btn-square digits"
                          value={state.generatePermissions}
                          onChange={(e) =>
                            setState({
                              ...state,
                              generatePermissions: e.target.value,
                            })
                          }
                        >
                          <option value="">Generate Permissions</option>
                          {["Yes", "No"].map((perm, i) => (
                            <option key={i} value={perm === "Yes" ? 1 : 0}>
                              {perm}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {!update && (
                      <>
                        <hr className="mt-4" />
                        <h5 className="mt-4 mb-4">
                          Manifests{"  "}
                          <span>
                            <button
                              className={`btn btn-secondary btn-sm ${
                                (addManifest || state.type === "application") &&
                                "disabled"
                              }`}
                              onClick={() => setAddManifest(true)}
                              type="button"
                            >
                              Add
                            </button>
                          </span>
                        </h5>

                        <div className="col-md-12 mb-4">
                          <ul>
                            {state.manifests.length > 0 &&
                              state.manifests.map((mani, i) => (
                                <li key={i} className="mb-3">
                                  <div className="btn-group" role="group">
                                    <div className="btn btn-primary btn-sm">
                                      {mani.name}
                                    </div>
                                    <div className="btn btn-outline-primary btn-xs">
                                      <Icon.X
                                        size={12}
                                        style={{ marginTop: 6 }}
                                      />
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>

                        {addManifest && (
                          <>
                            <div className="col-md-12">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Manifest Name"
                                      value={manifest.name}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          name: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Input Type
                                    </label>
                                    <select
                                      className="form-select btn-square digits"
                                      value={manifest.input_type}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          input_type: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">
                                        Select Input Type
                                      </option>
                                      {[
                                        "Textarea",
                                        "Text",
                                        "File",
                                        "Select",
                                        "Checkbox",
                                        "Date",
                                        "Dropzone",
                                      ].map((inpt, i) => (
                                        <option
                                          key={i}
                                          value={inpt.toLowerCase()}
                                        >
                                          {inpt}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Dependency
                                    </label>
                                    <select
                                      className="form-select btn-square digits"
                                      value={manifest.dependency}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          dependency: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">
                                        Select Dependency
                                      </option>
                                      {[
                                        "Resource",
                                        "Inline",
                                        "Input",
                                        "None",
                                      ].map((dept, i) => (
                                        <option
                                          key={i}
                                          value={dept.toLowerCase()}
                                        >
                                          {dept}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Grid Position
                                    </label>
                                    <input
                                      className="form-control"
                                      type="number"
                                      max={12}
                                      min={0}
                                      placeholder="Enter Grid Position"
                                      value={manifest.grid}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          grid: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Default Value
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Default Value"
                                      value={manifest.defaultValue}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          defaultValue: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Placeholder
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Placeholder"
                                      value={manifest.placeholder}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          placeholder: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-control m-t-10 m-checkbox-inline mb-4">
                                    <div className="checkbox checkbox-dark">
                                      <input
                                        type="checkbox"
                                        id="inline-1"
                                        value={manifest.browse}
                                        onChange={(e) =>
                                          setManifest({
                                            ...manifest,
                                            browse: e.target.checked,
                                          })
                                        }
                                      />
                                      <label htmlFor="inline-1">Browse</label>
                                    </div>
                                    <div className="checkbox checkbox-dark">
                                      <input
                                        type="checkbox"
                                        id="inline-2"
                                        value={manifest.read}
                                        onChange={(e) =>
                                          setManifest({
                                            ...manifest,
                                            read: e.target.checked,
                                          })
                                        }
                                      />
                                      <label htmlFor="inline-2">Read</label>
                                    </div>
                                    <div className="checkbox checkbox-dark">
                                      <input
                                        type="checkbox"
                                        id="inline-3"
                                        value={manifest.edit}
                                        onChange={(e) =>
                                          setManifest({
                                            ...manifest,
                                            edit: e.target.checked,
                                          })
                                        }
                                      />
                                      <label htmlFor="inline-3">Edit</label>
                                    </div>
                                    <div className="checkbox checkbox-dark">
                                      <input
                                        type="checkbox"
                                        id="inline-4"
                                        value={manifest.add}
                                        onChange={(e) =>
                                          setManifest({
                                            ...manifest,
                                            add: e.target.checked,
                                          })
                                        }
                                      />
                                      <label htmlFor="inline-4">Add</label>
                                    </div>
                                    <div className="checkbox checkbox-dark">
                                      <input
                                        type="checkbox"
                                        id="inline-5"
                                        value={manifest.delete}
                                        onChange={(e) =>
                                          setManifest({
                                            ...manifest,
                                            delete: e.target.checked,
                                          })
                                        }
                                      />
                                      <label htmlFor="inline-5">Delete</label>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="form-label">
                                      Details
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows={4}
                                      placeholder="Enter Details"
                                      value={manifest.details}
                                      onChange={(e) =>
                                        setManifest({
                                          ...manifest,
                                          details: e.target.value,
                                        })
                                      }
                                    ></textarea>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div
                                    className="btn-group pull-right"
                                    role="group"
                                  >
                                    <button
                                      type="button"
                                      className="btn btn-primary mt-4"
                                      onClick={handleAddManifest}
                                      disabled={
                                        manifest.name === "" ||
                                        manifest.input_type === "" ||
                                        manifest.dependency === ""
                                      }
                                    >
                                      Add Manifest
                                    </button>{" "}
                                    <button
                                      type="button"
                                      className="btn btn-secondary mt-4"
                                      onClick={() => {
                                        setAddManifest(false);
                                        setManifest(initialManifest);
                                      }}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    )}

                    <div className="col-md-12 mt-5">
                      <button
                        type="submit"
                        className={`btn btn-primary mt-4 ${
                          state.manifests.length < 1 &&
                          state.type !== "application" &&
                          "disabled"
                        }`}
                      >
                        Submit
                      </button>{" "}
                      <button type="button" className="btn btn-secondary mt-4">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="display" id="basic-2">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Path</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mods.length > 0 &&
                      mods.map((mod) => (
                        <tr key={mod.id}>
                          <td>{mod.name}</td>
                          <td>{mod.code}</td>
                          <td>{mod.path}</td>
                          <td>{mod.type}</td>
                          <td>
                            <Icon.Edit2
                              size={16}
                              onClick={() => handleUpdate(mod)}
                            />{" "}
                            <Icon.Trash2
                              size={16}
                              onClick={() => handleDelete(mod.id)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modules;
