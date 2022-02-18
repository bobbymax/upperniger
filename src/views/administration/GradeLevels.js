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

const GradeLevels = () => {
  const initialState = {
    id: 0,
    key: "",
    name: "",
  };
  const [state, setState] = useState(initialState);
  const [levels, setLevels] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);

  const columns = [
    { key: "key", label: "Key" },
    { key: "name", label: "Name" },
  ];

  const handleDrawer = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      key: state.key,
    };

    if (update) {
      alter("gradeLevels", state.id, data)
        .then((res) => {
          setLevels(
            levels.map((level) => {
              if (level.id === res.data.data.id) {
                return res.data.data;
              }

              return level;
            })
          );

          setState({
            id: 0,
            name: "",
            key: "",
          });

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("gradeLevels", data)
        .then((res) => {
          setLevels([res.data.data, ...levels]);
          setState({
            id: 0,
            name: "",
            key: "",
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleUpdate = (data) => {
    setUpdate(true);
    setOpenModal(true);

    setState({
      ...state,
      id: data.id,
      name: data.name,
      key: data.key,
    });
  };

  const handleDelete = (id) => {
    destroy("gradeLevels", id)
      .then((res) => {
        setLevels(levels.filter((level) => level.id !== res.data.data.id));
        setState(initialState);
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    collectAll("gradeLevels")
      .then((res) => {
        setLevels(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <BreadCrumb pageName={`Grade Levels`} handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Grade Level</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-9">
                        <TextInputField
                          label="Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          placeholder="Enter Level Name"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Key"
                          value={state.key}
                          onChange={(e) =>
                            setState({ ...state, key: e.target.value })
                          }
                          placeholder="Enter Level Key"
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
          rows={levels}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default GradeLevels;
