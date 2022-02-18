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

const ServiceCategory = () => {
  const initialState = {
    id: 0,
    name: "",
    description: "",
  };

  const [state, setState] = useState(initialState);
  const [serviceCategories, setServiceCategories] = useState([]);
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
      description: data.description ?? "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      description: state.description,
    };

    if (update) {
      alter("serviceCategories", state.id, data)
        .then((res) => {
          setServiceCategories(
            serviceCategories.map((category) => {
              if (category.id === res.data.data.id) {
                return res.data.data;
              }

              return category;
            })
          );

          setState({
            id: 0,
            name: "",
            description: "",
          });

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("serviceCategories", data)
        .then((res) => {
          setServiceCategories([res.data.data, ...serviceCategories]);
          setState({
            id: 0,
            name: "",
            description: "",
          });
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("serviceCategories", state.id)
      .then((res) => {
        setServiceCategories(
          serviceCategories.filter(
            (category) => category.id !== res.data.data.id
          )
        );
        setState({
          id: 0,
          name: "",
          description: "",
        });
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const columns = [{ key: "name", label: "Name" }];

  useEffect(() => {
    collectAll("serviceCategories")
      .then((res) => {
        setServiceCategories(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <BreadCrumb pageName="Service Categories" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Service Category</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <TextInputField
                          label="Service Category Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({ ...state, name: e.target.value })
                          }
                          placeholder="Enter Service Category Name"
                        />
                      </div>
                      <div className="col-md-12">
                        <TextInputField
                          label="Description"
                          multiline={4}
                          value={state.description}
                          onChange={(e) =>
                            setState({ ...state, description: e.target.value })
                          }
                          placeholder="Enter Description"
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
          rows={serviceCategories}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default ServiceCategory;
