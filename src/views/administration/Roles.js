/* eslint-disable eqeqeq */
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

const Roles = () => {
  const initialState = {
    id: 0,
    name: "",
    max_slots: 0,
    start_date: "",
    expiry_date: "",
    cannot_expire: 0,
    isSuper: 0,
  };

  const [roles, setRoles] = useState([]);
  const [state, setState] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);

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
      max_slots: data.max_slots,
      start_date: data.start_date,
      expiry_date: data.expiry_date === null ? "" : data.expiry_date,
      cannot_expire: data.cannot_expire,
      isSuper: data.isSuper,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      max_slots: state.max_slots,
      start_date: state.start_date,
      expiry_date: state.expiry_date,
      cannot_expire: state.cannot_expire,
      isSuper: state.isSuper,
    };

    if (update) {
      alter("roles", state.id, data)
        .then((res) => {
          setRoles(
            roles.map((role) => {
              if (role.id === res.data.data.id) {
                return res.data.data;
              }

              return role;
            })
          );
          setState({
            name: "",
            max_slots: 0,
            start_date: "",
            expiry_date: "",
            cannot_expire: 0,
            isSuper: 0,
          });
          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("roles", data)
        .then((res) => {
          setRoles([res.data.data, ...roles]);
          setState({
            name: "",
            max_slots: 0,
            start_date: "",
            expiry_date: "",
            cannot_expire: 0,
            isSuper: 0,
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("roles", id)
      .then((res) => {
        setRoles(roles.filter((role) => role.id !== res.data.data.id));
        setState({
          name: "",
          max_slots: 0,
          start_date: "",
          expiry_date: "",
          cannot_expire: 0,
          isSuper: 0,
        });
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "max_slots", label: "Slots" },
  ];

  useEffect(() => {
    collectAll("roles")
      .then((res) => {
        setRoles(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <BreadCrumb pageName={`Roles`} handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Role</h5>
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
                          placeholder="Enter Role Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Slots Available"
                          type="number"
                          value={state.max_slots}
                          onChange={(e) =>
                            setState({ ...state, max_slots: e.target.value })
                          }
                          placeholder="Slots Available"
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Cannot Expire?"
                          value={state.cannot_expire}
                          onChange={(e) =>
                            setState({
                              ...state,
                              cannot_expire: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Action"
                            disabled
                          />
                          {[
                            { key: 0, label: "No" },
                            { key: 1, label: "Yes" },
                          ].map((cnt, i) => (
                            <CustomSelectOptions
                              key={i}
                              label={cnt.label}
                              value={cnt.key}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Start Date"
                          type="date"
                          value={state.start_date}
                          onChange={(e) =>
                            setState({ ...state, start_date: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Expiry Date"
                          type="date"
                          value={state.expiry_date}
                          onChange={(e) =>
                            setState({ ...state, expiry_date: e.target.value })
                          }
                          disabled={state.cannot_expire == 1}
                        />
                      </div>
                      <div className="col-md-4">
                        <CustomSelect
                          label="Admin Role"
                          value={state.isSuper}
                          onChange={(e) =>
                            setState({
                              ...state,
                              isSuper: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Action"
                            disabled
                          />
                          {[
                            { key: 0, label: "No" },
                            { key: 1, label: "Yes" },
                          ].map((sup, i) => (
                            <CustomSelectOptions
                              key={i}
                              label={sup.label}
                              value={sup.key}
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
          rows={roles}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Roles;
