import React, { useEffect, useState } from "react";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";
import TextInputField from "../../components/form/TextInputField";
import BreadCrumb from "../../components/theme/commons/BreadCrumb";
import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";
import CustomCardHeader from "../../components/theme/commons/cards/CustomCardHeader";
import TableCard from "../../components/theme/commons/TableCard";
import {
  alter,
  collectAll,
  destroy,
  store,
} from "../../utils/helpers/functions/controllers";
// import { useUser } from '../../utils/hooks/useUser'

const Settings = () => {
  const initialState = {
    id: 0,
    key: "",
    display_name: "",
    input_type: "",
    order: 0,
    details: "",
    group: "",
  };

  const [state, setState] = useState(initialState);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [settings, setSettings] = useState([]);

  const groups = ["Site", "Dashboard"];
  const input_types = [
    "Text",
    "Textarea",
    "File",
    "Checkbox",
    "Select",
    "Number",
    "Radio",
  ];

  const handleDrawer = () => {
    setOpenModal(!openModal);
  };

  const handleUpdate = (data) => {
    setOpenModal(true);
    setUpdate(true);
    setState({
      ...state,
      id: data.id,
      key: data.key,
      display_name: data.display_name,
      input_type: data.input_type,
      order: data.order,
      group: data.group,
      details: data.details,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      display_name: state.display_name,
      key: state.key,
      input_type: state.input_type,
      group: state.group,
      details: state.details,
    };

    try {
      if (update) {
        alter("settings", state.id, data)
          .then((res) => {
            setSettings(
              settings.map((setting) => {
                if (setting.id === res.data.data.id) {
                  return res.data.data;
                }

                return setting;
              })
            );
            setState(initialState);
            setOpenModal(false);
            setUpdate(false);
          })
          .catch((err) => console.log(err.message));
      } else {
        store("settings", data)
          .then((res) => {
            setSettings([res.data.data, ...settings]);
            setState(initialState);
            setOpenModal(false);
          })
          .catch((err) => console.log(err.message));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    try {
      destroy("settings", id)
        .then((res) => {
          setSettings(
            settings.filter((setting) => setting.id !== res.data.data.id)
          );
          setState(initialState);
          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { key: "key", label: "Key" },
    { key: "display_name", label: "Display Name" },
    { key: "input_type", label: "Input Type" },
  ];

  useEffect(() => {
    try {
      collectAll("settings")
        .then((res) => setSettings(res.data.data))
        .catch((err) => console.log(err.message));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <BreadCrumb pageName="Settings" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Portal Setting</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-3">
                        <TextInputField
                          label="Key"
                          value={state.key}
                          onChange={(e) =>
                            setState({ ...state, key: e.target.value })
                          }
                          placeholder="Enter Setting Key"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Display Name"
                          value={state.display_name}
                          onChange={(e) =>
                            setState({ ...state, display_name: e.target.value })
                          }
                          placeholder="Enter Setting Display Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Type"
                          value={state.input_type}
                          onChange={(e) =>
                            setState({
                              ...state,
                              input_type: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Input Type"
                          />

                          {input_types.map((typ, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={typ.toLowerCase()}
                              label={typ}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Type"
                          value={state.group}
                          onChange={(e) =>
                            setState({
                              ...state,
                              group: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Input Type"
                          />

                          {groups.map((grp, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={grp.toLowerCase()}
                              label={grp}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-12">
                        <TextInputField
                          label="Details"
                          value={state.details}
                          onChange={(e) =>
                            setState({ ...state, details: e.target.value })
                          }
                          placeholder="Enter Setting Details"
                          multiline={4}
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
          rows={settings}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Settings;
