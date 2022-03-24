/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactS3 from "react-s3";
import CustomSelect from "../../../components/form/CustomSelect";
import CustomSelectOptions from "../../../components/form/CustomSelectOptions";
import TextInputField from "../../../components/form/TextInputField";
import BreadCrumb from "../../../components/theme/commons/BreadCrumb";
import CustomCard from "../../../components/theme/commons/cards/CustomCard";
import CustomCardBody from "../../../components/theme/commons/cards/CustomCardBody";
import CustomCardHeader from "../../../components/theme/commons/cards/CustomCardHeader";
import { allowedFileTypes, config, getFileExt } from "../../../utils";
import { formatBytes } from "../../../utils/helpers/functions";
import {
  alter,
  batchRequests,
  collectAll,
  store,
} from "../../../utils/helpers/functions/controllers";
import { useUser } from "../../../utils/hooks/useUser";
import moment from "moment";
import "./profile.css";

// Integrate the update function
// set user permissions

const UserProfile = () => {
  const auth = useUser();
  const initialState = {
    id: 0,
    flat_no: 0,
    street_one: "",
    street_two: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
    type: "",
  };

  const documentState = {
    id: 0,
    company_document_id: 0,
    additional_company_document_id: 0,
    description: "",
    value: "",
    src: "",
    file: null,
    path: "",
    score: 0,
    ext: "",
    size: 0,
    fileType: "",
    error: false,
    message: "",
  };

  const [addresses, setAddresses] = useState([]);
  const [requiredDocuments, setRequiredDocuments] = useState([]);
  const [docChildren, setDocChildren] = useState([]);
  const [documentations, setDocumentations] = useState([]);
  const [addressBar, setAddressBar] = useState(false);
  const [state, setState] = useState(initialState);
  const [formState, setFormState] = useState(documentState);
  const [update, setUpdate] = useState(false);
  const [hasChildren, setHasChildren] = useState(false);

  const handleDrawer = () => {
    console.log(auth);
  };

  const handleUpdate = (data) => {
    setUpdate(true);
    setAddressBar(true);

    setState({
      ...state,
      id: data.id,
      flat_no: data.flat_no ?? "",
      street_one: data.street_one,
      street_two: data.street_two ?? "",
      zipcode: data.zipcode,
      city: data.city,
      state: data.state,
      country: data.country,
      type: data.type,
    });
  };

  const handleUplaodFileChange = (e) => {
    const file = e.target.files[0];
    const allowed = allowedFileTypes.includes(getFileExt(file.name));

    if (allowed) {
      setFormState({
        ...formState,
        src: URL.createObjectURL(file),
        file: file,
        error: false,
        message: "All good!!!",
        fileType: file.type,
        size: file.size,
        ext: getFileExt(file.name),
      });
    } else {
      setFormState({
        ...formState,
        src: "",
        file: null,
        fileType: "",
        size: 0,
        ext: "",
        error: true,
        mssg: "The file you are trying to upload is not supported",
      });
    }
  };

  const handleDocumentationSubmit = (e) => {
    e.preventDefault();

    ReactS3.uploadFile(formState.file, config)
      .then((data) => {
        // console.log(data);

        // const documentId =
        //   formState.additional_company_document_id > 0
        //     ? formState.additional_company_document_id
        //     : formState.company_document_id;

        const compDoc =
          formState.additional_company_document_id > 0
            ? docChildren.filter(
                (child) =>
                  child && child.id == formState.additional_company_document_id
              )
            : requiredDocuments.filter(
                (doc) => doc && doc.id == formState.company_document_id
              );

        const score = compDoc[0] && compDoc[0].score;

        const request = {
          company_id: auth && auth.company_id,
          company_document_id: formState.company_document_id,
          child_id: formState.additional_company_document_id,
          description: formState.description,
          value: formState.value,
          path: data.location,
          score: score,
          ext: formState.ext,
          size: formState.size,
          type: formState.fileType,
        };

        try {
          store("documentations", request)
            .then((res) => {
              const data = res.data.data;

              setDocumentations([data, ...documentations]);
              setDocChildren([]);
              setHasChildren(false);
              setFormState(documentState);
            })
            .catch((err) => console.log(err.message));
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addressable = auth && auth.type === "vendor" ? "company" : "staff";
    const addressableId =
      auth && auth.type === "vendor" ? auth.company_id : auth.id;

    const data = {
      flat_no: state.flat_no,
      street_one: state.street_one,
      street_two: state.street_two,
      zipcode: state.zipcode,
      city: state.city,
      state: state.state,
      country: state.country,
      type: state.type,
      addressable: addressable,
      addressable_id: addressableId,
    };

    if (update) {
      try {
        alter("addresses", state.id, data)
          .then((res) => {
            const result = res.data;

            setAddresses(
              addresses.map((address) => {
                if (address.id == result.data.id) {
                  return result.data;
                }
                return address;
              })
            );
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        store("addresses", data)
          .then((res) => {
            const result = res.data;
            setAddresses([result.data, ...addresses]);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }

    setState(initialState);
    setAddressBar(false);
    setUpdate(false);
  };

  const existingCd = (loads) => {
    const docIds = [];

    loads.length > 0 &&
      loads.map((load) => load && docIds.push(load.company_document_id));

    return docIds;
  };

  useEffect(() => {
    if (formState.company_document_id > 0) {
      const compDoc = requiredDocuments.filter(
        (doc) => doc && doc.id == formState.company_document_id
      );

      if (compDoc[0] && compDoc[0].children.length > 0) {
        setHasChildren(true);
        setDocChildren(compDoc[0].children);
      }
    }
  }, [formState.company_document_id]);

  useEffect(() => {
    if (auth && auth.type === "vendor") {
      try {
        const requiredDocumentsCollection = collectAll("companyDocuments");
        const addressCollection = collectAll("addresses");
        const documentationsCollection = collectAll("documentations");

        batchRequests([
          requiredDocumentsCollection,
          addressCollection,
          documentationsCollection,
        ])
          .then(
            axios.spread((...res) => {
              const requiredDocumentsData = res[0].data.data;
              const addressData = res[1].data.data;
              const documentationsData = res[2].data.data;

              const documentationLoads = documentationsData.filter(
                (doc) => doc && doc.company_id == auth.company_id
              );

              const ids = existingCd(documentationLoads);

              setAddresses(
                addressData.filter(
                  (address) => address && address.owner.id == auth.company_id
                )
              );

              setRequiredDocuments(
                requiredDocumentsData.filter(
                  (doc) =>
                    doc.parentId == 0 &&
                    doc.type === "fillable" &&
                    !ids.includes(doc.id)
                )
              );

              setDocumentations(documentationLoads);

              // console.log(ids);
            })
          )
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  }, [auth]);

  return (
    <>
      <BreadCrumb pageName="User Profile" handleDrawer={handleDrawer} />

      <div className="row">
        <div className="col-md-4">
          <CustomCard>
            <CustomCardBody>
              <form>
                <div className="row mb-2">
                  <div className="profile-title">
                    <div className="media">
                      <div className="row">
                        <div className="col-md-12 mb-2">
                          <img
                            className="img-70 rounded-circle"
                            alt="avatar"
                            src="../assets/images/user/7.jpg"
                          />
                        </div>
                        <div className="col-md-12">
                          <div className="media-body">
                            <h3 className="mb-1 f-20 txt-primary">
                              {auth &&
                                auth.firstname.toUpperCase() +
                                  " " +
                                  auth.surname.toUpperCase()}
                            </h3>
                            <p className="f-12">
                              {auth && auth.department !== null
                                ? auth.department.name.toUpperCase()
                                : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-md-12">
                    <TextInputField
                      label="Staff Number"
                      value={auth && auth.staff_no}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Email Address"
                      value={auth && auth.email}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Mobile"
                      value={auth && auth.mobile}
                      disabled
                    />
                  </div>
                  {auth && auth.type !== "vendor" && (
                    <div className="col-md-12">
                      <TextInputField
                        label="Grade Level"
                        value={
                          auth &&
                          auth.grade_level_id > 0 &&
                          auth.type !== "vendor" &&
                          auth.grade_level.key
                        }
                        disabled
                      />
                    </div>
                  )}
                  <div className="col-md-12">
                    <TextInputField
                      label="Type"
                      value={auth && auth.type.toUpperCase()}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <TextInputField
                      label="Staff Status"
                      value={auth && auth.status}
                      disabled
                    />
                  </div>
                </div>
              </form>
            </CustomCardBody>
          </CustomCard>
        </div>
        <div className="col-md-8">
          <CustomCard>
            <CustomCardHeader>
              <div className="row">
                <h5 className="mb-4">Company Details</h5>
                <div className="profile-title">
                  <div className="media">
                    <div className="row">
                      <div className="col-md-12 mb-2">
                        <img
                          className="img-70 rounded-circle"
                          alt="avatar"
                          src="../assets/images/user/7.jpg"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="media-body">
                          <h3 className="mb-1 f-20 txt-primary">
                            {auth && auth.company_id > 0
                              ? auth.company.name
                              : "NCDMB"}
                          </h3>
                          <p className="mb-0 f-12">COMPANY ADDRESS HERE</p>
                          <p className="mb-0 f-12">
                            WEBSITE HERE | CONTACT NUMBER
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardHeader>
            <CustomCardBody>
              {auth.type === "vendor" && (
                <div className="address-area">
                  <h6 className="mb-3">
                    Address{"  "}
                    <span>
                      <button
                        className="btn btn-xs btn-primary"
                        onClick={() => setAddressBar(true)}
                        disabled={addressBar}
                      >
                        Add
                      </button>
                    </span>
                  </h6>

                  {addressBar && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-2">
                            <TextInputField
                              label="Flat No."
                              placeholder="Flat No."
                              value={state.flat_no}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  flat_no: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-10">
                            <TextInputField
                              label="Street *"
                              placeholder="Enter Street Here"
                              value={state.street_one}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  street_one: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-8">
                            <TextInputField
                              label="Additional Street (optional)"
                              placeholder="Enter Additional Here (optional)"
                              value={state.street_two}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  street_two: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-4">
                            <TextInputField
                              label="Zipcode *"
                              placeholder="Enter Zipcode Here"
                              value={state.zipcode}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  zipcode: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <TextInputField
                              label="City *"
                              placeholder="Enter City Here"
                              value={state.city}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-6">
                            <TextInputField
                              label="State *"
                              placeholder="Enter State Here"
                              value={state.state}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  state: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-7">
                            <TextInputField
                              label="Country *"
                              placeholder="Enter Country Here"
                              value={state.country}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  country: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-md-5">
                            <CustomSelect
                              label="Address Type"
                              value={state.type}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  type: e.target.value,
                                })
                              }
                            >
                              <CustomSelectOptions
                                disabled
                                value=""
                                label="Select Address Type"
                              />

                              {[
                                { value: "hq", label: "Head Office" },
                                { value: "branch", label: "Branch Office" },
                              ].map((office, i) => (
                                <CustomSelectOptions
                                  key={i}
                                  label={office.label}
                                  value={office.value}
                                />
                              ))}
                            </CustomSelect>
                          </div>

                          <div className="col-md-12">
                            <div className="btn-group btn-rounded">
                              <button
                                type="submit"
                                className="btn btn-sm btn-success"
                              >
                                Add Address
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => {
                                  setState(initialState);
                                  setAddressBar(false);
                                  setUpdate(false);
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  )}

                  {addresses.length > 0 ? (
                    addresses.map((address) => (
                      <div className="address-card mt-3" key={address.id}>
                        <h6 className="text-success mb-3">
                          {address.type === "hq"
                            ? "Head Office"
                            : "Branch Office"}{" "}
                          <span>
                            <button
                              className="btn btn-secondary btn-xs"
                              onClick={() => handleUpdate(address)}
                              disabled={update || addressBar}
                            >
                              Edit
                            </button>
                          </span>
                        </h6>
                        <p>
                          {`${address.flat_no} ${address.street_one} ${
                            address.street_two ?? ""
                          }, ${address.zipcode} ${address.city} ${
                            address.state
                          } ${address.country}.`}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="address-card mt-3">
                      <p className="text-danger">
                        THERE ARE NO ADDRESSES ADDED FOR THIS COMPANY!!
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="team-area mt-5">
                <h6 className="mb-3">Team members</h6>
                <div className="customers d-inline-block avatar-group">
                  <ul>
                    <li className="d-inline-block">
                      <img
                        className="img-70 rounded-circle"
                        src="../assets/images/user/3.jpg"
                        alt="avatar group"
                      />
                    </li>
                    <li className="d-inline-block">
                      <img
                        className="img-70 rounded-circle"
                        src="../assets/images/user/5.jpg"
                        alt="avatar group"
                      />
                    </li>
                    <li className="d-inline-block">
                      <img
                        className="img-70 rounded-circle"
                        src="../assets/images/user/1.jpg"
                        alt="avatar group"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </CustomCardBody>
          </CustomCard>
        </div>

        {auth && auth.type === "vendor" && (
          <>
            <div className="col-md-4 mt-4">
              <CustomCard>
                <CustomCardHeader>
                  <h5>Upload Document</h5>
                </CustomCardHeader>
                <CustomCardBody>
                  <form onSubmit={handleDocumentationSubmit}>
                    <CustomSelect
                      label="Document Type"
                      value={formState.company_document_id}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          company_document_id: parseInt(e.target.value),
                        })
                      }
                    >
                      <CustomSelectOptions
                        label="Select Document Type"
                        value={0}
                        disabled
                      />

                      {requiredDocuments.length > 0 &&
                        requiredDocuments.map((doc) => (
                          <CustomSelectOptions
                            label={doc.name}
                            key={doc.id}
                            value={doc.id}
                          />
                        ))}
                    </CustomSelect>

                    {hasChildren && (
                      <CustomSelect
                        label="Child Type"
                        value={formState.additional_company_document_id}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            additional_company_document_id: parseInt(
                              e.target.value
                            ),
                          })
                        }
                      >
                        <CustomSelectOptions
                          label="Select Child Type"
                          value={0}
                          disabled
                        />

                        {docChildren.length > 0 &&
                          docChildren.map((doc) => (
                            <CustomSelectOptions
                              label={doc.name}
                              key={doc.id}
                              value={doc.id}
                            />
                          ))}
                      </CustomSelect>
                    )}

                    <TextInputField
                      label="Description"
                      placeholder="Enter Description Here"
                      multiline={3}
                      value={formState.description}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          description: e.target.value,
                        })
                      }
                    />

                    <TextInputField
                      label="Value"
                      placeholder="Enter Value Here"
                      value={formState.value}
                      onChange={(e) =>
                        setFormState({ ...formState, value: e.target.value })
                      }
                    />

                    <TextInputField
                      label="Upload Document"
                      type="file"
                      value={formState.path}
                      onChange={handleUplaodFileChange}
                    />

                    <div className="btn-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary btn-rounded"
                        disabled={
                          formState.company_document_id == 0 ||
                          formState.description === ""
                        }
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger btn-rounded"
                        onClick={() => {
                          setFormState(documentState);
                          setHasChildren(false);
                          setDocChildren([]);
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </CustomCardBody>
              </CustomCard>
            </div>

            <div className="col-md-8 mt-4">
              <div className="file-content">
                <CustomCard>
                  <CustomCardHeader>
                    <h4>All Documents</h4>
                    <p className="text-muted mb-0">
                      Required documents for tenders
                    </p>
                  </CustomCardHeader>
                  <CustomCardBody additionalClasses="file-manager">
                    <ul className="files">
                      {documentations.length > 0 &&
                        documentations.map((doc) => (
                          <li className="file-box" key={doc.id}>
                            <div className="file-top">
                              <i className="fa fa-file-image-o txt-primary"></i>
                              <i className="fa fa-ellipsis-v f-14 ellips"></i>
                            </div>
                            <div className="file-bottom">
                              <h6>{doc.description} </h6>
                              <p className="mb-1">{formatBytes(doc.size)}</p>
                              <p>
                                {" "}
                                <b>Uploaded: </b>{" "}
                                {moment(doc.created_at)
                                  .startOf("hour")
                                  .fromNow()}
                              </p>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </CustomCardBody>
                </CustomCard>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
