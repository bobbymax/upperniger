/* eslint-disable eqeqeq */
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

const RequiredDocuments = () => {
  const initialState = {
    id: 0,
    name: "",
    description: "",
    rule: "",
    value: "",
    pattern: "",
    score: 0,
    parentId: 0,
    necessity: "",
    type: "",
  };
  const [state, setState] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [update, setUpdate] = useState(false);

  const columns = [
    { key: "name", label: "Name" },
    { key: "pattern", label: "Pattern" },
  ];

  const selectOptions = [
    { value: "required", label: "Required" },
    { value: "optional", label: "Optional" },
  ];

  const handleUpdate = (data) => {
    setUpdate(true);
    setState({
      ...state,
      id: data.id,
      name: data.name,
      description: data.description,
      rule: data.rule === null ? "" : data.rule,
      value: data.value === null ? "" : data.value,
      pattern: data.pattern,
      score: data.score,
      parentId: data.parentId,
      necessity: data.necessity,
      type: data.type,
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    try {
      destroy("companyDocuments", id)
        .then((res) => {
          const data = res.data.data;

          setDocuments(documents.filter((document) => document.id !== data.id));
          setState(initialState);
          setOpen(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: state.name,
      description: state.description,
      rule: state.rule,
      value: state.value,
      pattern: state.pattern,
      score: state.score,
      parentId: state.parentId,
      necessity: state.necessity,
      type: state.type,
    };

    if (update) {
      try {
        alter("companyDocuments", state.id, data)
          .then((res) => {
            const data = res.data.data;

            setDocuments(
              documents.map((document) => {
                if (document.id === data.id) {
                  return data;
                }

                return document;
              })
            );

            setState(initialState);
            setOpen(false);
            setUpdate(false);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        store("companyDocuments", data)
          .then((res) => {
            const data = res.data.data;
            setDocuments([data, ...documents]);
            setState(initialState);
            setOpen(false);
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    try {
      collectAll("companyDocuments")
        .then((res) => {
          const data = res.data.data;

          setDocuments(data);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <BreadCrumb
        pageName="Required Document Types"
        handleDrawer={handleDrawer}
      />

      {open && (
        <div className="row">
          <div className="col-md-12">
            <CustomCard>
              <CustomCardHeader>
                <h5>{update ? "Update" : "Add"} Required Document Type</h5>
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
                        placeholder="Please Enter Name"
                      />
                    </div>
                    <div className="col-md-5">
                      <CustomSelect
                        label="Scoring Pattern"
                        value={state.pattern}
                        onChange={(e) =>
                          setState({
                            ...state,
                            pattern: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value=""
                          label="Select Scoring Pattern"
                        />

                        {["Sighting", "Scoring"].map((pat, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={pat.toLowerCase()}
                            label={pat}
                          />
                        ))}
                      </CustomSelect>
                    </div>

                    <div className="col-md-12">
                      <TextInputField
                        label="Description"
                        value={state.description}
                        onChange={(e) =>
                          setState({ ...state, description: e.target.value })
                        }
                        placeholder="Please Enter Description"
                        multiline={4}
                      />
                    </div>
                    <div className="col-md-5">
                      <CustomSelect
                        label="Parent"
                        value={state.parentId}
                        onChange={(e) =>
                          setState({
                            ...state,
                            parentId: parseInt(e.target.value),
                          })
                        }
                      >
                        <CustomSelectOptions value={-1} label="Select Parent" />
                        <CustomSelectOptions value={0} label="None" />

                        {documents.map(
                          (doc) =>
                            doc.parentId == 0 &&
                            doc.pattern !== "sighting" && (
                              <CustomSelectOptions
                                key={doc.id}
                                value={doc.id}
                                label={doc.name}
                              />
                            )
                        )}
                      </CustomSelect>
                    </div>
                    <div className="col-md-3">
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
                        <CustomSelectOptions value="" label="Select Type" />

                        {[
                          { value: "fillable", label: "Fillable" },
                          { value: "evaluated", label: "Evaluated" },
                        ].map((opt, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={opt.value}
                            label={opt.label}
                          />
                        ))}
                      </CustomSelect>
                    </div>
                    <div className="col-md-4">
                      <CustomSelect
                        label="Necessity"
                        value={state.necessity}
                        onChange={(e) =>
                          setState({
                            ...state,
                            necessity: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value=""
                          label="Select Necessity"
                        />

                        {selectOptions.map((opt, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={opt.value}
                            label={opt.label}
                          />
                        ))}
                      </CustomSelect>
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Rule"
                        value={state.rule}
                        onChange={(e) =>
                          setState({ ...state, rule: e.target.value })
                        }
                        placeholder="Please Requirement Rule"
                      />
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Value"
                        value={state.value}
                        onChange={(e) =>
                          setState({ ...state, value: e.target.value })
                        }
                        placeholder="Please Enter Value"
                      />
                    </div>

                    <div className="col-md-4">
                      <TextInputField
                        label="Score"
                        type="number"
                        value={state.score}
                        onChange={(e) =>
                          setState({ ...state, score: e.target.value })
                        }
                      />
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
                          setOpen(false);
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
          rows={documents}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default RequiredDocuments;
