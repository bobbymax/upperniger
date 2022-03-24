import React, { useEffect, useState } from "react";
import {
  alter,
  collectAll,
  store,
} from "../../utils/helpers/functions/controllers";
import BreadCrumb from "../../components/theme/commons/BreadCrumb";
import TableCard from "../../components/theme/commons/TableCard";
import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardHeader from "../../components/theme/commons/cards/CustomCardHeader";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";
import TextInputField from "../../components/form/TextInputField";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const initialState = {
    id: 0,
    service_category_id: 0,
    registration_no: "",
    tin_no: "",
    name: "",
    reference_no: "",
    email: "",
    mobile: "",
    contact_email: "",
    contact_mobile: "",
    firstname: "",
    surname: "",
    type: "vendor",
    category: "",
  };
  const navigate = useNavigate();
  const columns = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Code", key: "reference_no" },
  ];
  const [state, setState] = useState(initialState);
  const [companies, setCompanies] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  // const [fileUpload, setFileUpload] = useState({})

  const handleDrawer = () => {
    setOpenModal(!openModal);
    setState(initialState);
    setUpdate(false);
  };

  // const handleUpdate = (data) => {
  //   setUpdate(true);
  //   setOpenModal(true);

  //   setState({
  //     ...state,
  //     id: data.id,
  //     service_category_id: data.service_category_id,
  //     registration_no: data.registration_no,
  //     tin_no: data.tin_no,
  //     name: data.name,
  //     reference_no: data.reference_no,
  //     email: data.email,
  //     mobile: data.mobile,
  //     type: data.type,
  //     category: data.category,
  //   });
  // };

  const manageVendor = (vendor) => {
    navigate(`/vendors/${vendor.reference_no}/manage`, {
      state: {
        vendor,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: 0,
      service_category_id: state.service_category_id,
      registration_no: state.registration_no,
      tin_no: state.tin_no,
      name: state.name,
      reference_no: Math.floor(Math.random() * 10000000000),
      email: state.email,
      mobile: state.mobile,
      contact_email: state.contact_email,
      contact_mobile: state.contact_mobile,
      firstname: state.firstname,
      surname: state.surname,
      type: state.type,
      category: state.category,
    };

    if (update) {
      alter("companies", state.id, data)
        .then((res) => {
          setCompanies(
            companies.map((vendor) => {
              if (vendor.id === res.data.data.id) {
                return res.data.data;
              }

              return vendor;
            })
          );
          setState(initialState);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("companies", data)
        .then((res) => {
          setCompanies([res.data.data, ...companies]);
          setState(initialState);
        })
        .catch((err) => console.log(err.message));
    }
    setOpenModal(false);
  };

  //   const handleDelete = (id) => {
  //     console.log(id);
  //   };

  useEffect(() => {
    collectAll("companies")
      .then((res) => {
        if (res.data !== "") setCompanies(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    collectAll("serviceCategories")
      .then((res) => setServiceCategories(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <BreadCrumb pageName="Vendors" handleDrawer={handleDrawer} />

      {openModal && (
        <>
          <div className="row">
            <div className="col-md-12">
              <CustomCard>
                <CustomCardHeader>
                  <h5>{update ? "Update" : "Add"} Vendor</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                        <TextInputField
                          label="Registration Number"
                          value={state.registration_no}
                          onChange={(e) =>
                            setState({
                              ...state,
                              registration_no: e.target.value,
                            })
                          }
                          placeholder="Enter RC/BC Number"
                        />
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Tin"
                          value={state.tin_no}
                          onChange={(e) =>
                            setState({
                              ...state,
                              tin_no: e.target.value,
                            })
                          }
                          placeholder="Enter Tin Number"
                        />
                      </div>
                      <div className="col-md-4">
                        <CustomSelect
                          label="Service Category"
                          value={state.service_category_id}
                          onChange={(e) =>
                            setState({
                              ...state,
                              service_category_id: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value={0}
                            label="Select Service Category"
                            disabled
                          />
                          {serviceCategories.map((cat) => (
                            <CustomSelectOptions
                              key={cat.id}
                              value={cat.id}
                              label={cat.name}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-12">
                        <TextInputField
                          label="Company Name"
                          value={state.name}
                          onChange={(e) =>
                            setState({
                              ...state,
                              name: e.target.value,
                            })
                          }
                          placeholder="Enter Company Name"
                        />
                      </div>
                      <div className="col-md-5">
                        <TextInputField
                          label="Company Email"
                          text="email"
                          value={state.email}
                          onChange={(e) =>
                            setState({
                              ...state,
                              email: e.target.value,
                            })
                          }
                          placeholder="Enter Company Email"
                        />
                      </div>
                      <div className="col-md-4">
                        <TextInputField
                          label="Company Mobile"
                          value={state.mobile}
                          onChange={(e) =>
                            setState({
                              ...state,
                              mobile: e.target.value,
                            })
                          }
                          placeholder="Enter Company Mobile"
                        />
                      </div>
                      <div className="col-md-3">
                        <CustomSelect
                          label="Ownership"
                          value={state.category}
                          onChange={(e) =>
                            setState({
                              ...state,
                              category: e.target.value,
                            })
                          }
                        >
                          <CustomSelectOptions
                            value=""
                            label="Select Ownership Type"
                            disabled
                          />
                          {[
                            { key: "nigeria-owned", label: "Nigerian Owned" },
                            {
                              key: "nigeria-company-owned-by-foreign-company",
                              label:
                                "Nigerian Company Owned by Foreign Company",
                            },
                            { key: "foreign-owned", label: "Foreign Owned" },
                          ].map((category, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={category.key}
                              label={category.label}
                            />
                          ))}
                        </CustomSelect>
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Contact Firstname"
                          value={state.firstname}
                          onChange={(e) =>
                            setState({
                              ...state,
                              firstname: e.target.value,
                            })
                          }
                          placeholder="Contact Firstname"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Contact Surname"
                          value={state.surname}
                          onChange={(e) =>
                            setState({
                              ...state,
                              surname: e.target.value,
                            })
                          }
                          placeholder="Enter Contact Surname"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Contact Email"
                          type="email"
                          value={state.contact_email}
                          onChange={(e) =>
                            setState({
                              ...state,
                              contact_email: e.target.value,
                            })
                          }
                          placeholder="Enter Contact Email"
                        />
                      </div>
                      <div className="col-md-3">
                        <TextInputField
                          label="Contact Mobile"
                          value={state.contact_mobile}
                          onChange={(e) =>
                            setState({
                              ...state,
                              contact_mobile: e.target.value,
                            })
                          }
                          placeholder="Enter Contact Mobile"
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
          rows={companies}
          manageVendor={manageVendor}
        />
      </div>
    </>
  );
};

export default Company;
