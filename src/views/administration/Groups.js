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

const Groups = () => {
  const initialState = {
    id: 0,
    name: "",
    expiry_date: "",
    cannot_expire: 0,
    users: [],
  };
  const [state, setState] = useState(initialState);
  const [groups, setGroups] = useState([]);
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
      expiry_date: data.expiry_date ?? "",
      cannot_expire: data.cannot_expire === 1 ? true : false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      expiry_date: state.expiry_date,
      cannot_expire: state.cannot_expire,
    };

    if (update) {
      alter("groups", state.id, data)
        .then((res) => {
          setGroups(
            groups.map((group) => {
              if (group.id === res.data.data.id) {
                return res.data.data;
              }

              return group;
            })
          );

          setState({
            id: 0,
            name: "",
            expiry_date: "",
            cannot_expire: false,
            users: [],
          });

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("groups", data)
        .then((res) => {
          setGroups([res.data.data, ...groups]);
          setState({
            id: 0,
            name: "",
            expiry_date: "",
            cannot_expire: false,
            users: [],
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("groups", state.id)
      .then((res) => {
        setGroups(groups.filter((group) => group.id !== res.data.data.id));
        setState({
          id: 0,
          name: "",
          expiry_date: "",
          cannot_expire: false,
          users: [],
        });
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const columns = [{ key: "name", label: "Name" }];

  useEffect(() => {
    collectAll("groups")
      .then((res) => {
        setGroups(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <BreadCrumb pageName="Groups" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Group</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-5">
                        <TextInputField
                          label="Group Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          placeholder="Enter Group Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Permanent Group"
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
                            label="Cannot Expire?"
                            disabled
                          />
                          {[
                            { key: 0, label: "No" },
                            { key: 1, label: "Yes" },
                          ].map((act, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={act.key}
                              label={act.label}
                            />
                          ))}
                        </CustomSelect>
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
          rows={groups}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Groups;
