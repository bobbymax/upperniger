/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  collectAll,
  alter,
  destroy,
  store,
} from "../../utils/helpers/functions/controllers";
import { useUser } from "../../utils/hooks/useUser";
import BreadCrumb from "../../components/theme/commons/BreadCrumb";
import TableCard from "../../components/theme/commons/TableCard";
import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardHeader from "../../components/theme/commons/cards/CustomCardHeader";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";
import TextInputField from "../../components/form/TextInputField";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";

const Projects = () => {
  const initialState = {
    id: 0,
    service_category_id: 0,
    department_id: 0,
    reference_no: "",
    duration: 0,
    measureIn: "",
    description: "",
    location: "",
    coordinates: "",
    proposed_amount: 0,
    isToBeMobilised: 0,
    budget_year: 2021,
    status: "pending",
    approval_threshold: "",
  };
  const auth = useUser();
  const [state, setState] = useState(initialState);
  const [projects, setProjects] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [awardReq, setAwardReq] = useState({
    company_id: 0,
    approved_amount: 0,
    mobilization: 0,
    payable: 0,
  });

  const handleDrawer = () => {
    setOpenModal(!openModal);
  };

  const handleUpdate = (data) => {
    setUpdate(true);
    setOpenModal(true);

    setState({
      ...state,
      id: data.id,
      service_category_id: data.service_category_id,
      department_id: data.department_id,
      reference_no: data.reference_no,
      duration: data.duration,
      measureIn: data.measureIn,
      description: data.description,
      location: data.location,
      coordinates: data.coordinates,
      proposed_amount: data.proposed_amount,
      isToBeMobilised: data.isToBeMobilised === 1 ? true : false,
      budget_year: data.budget_year,
      status: data.status,
      approval_threshold: data.approval_threshold,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      service_category_id: state.service_category_id,
      department_id: auth.department_id,
      reference_no: Math.floor(Math.random() * 10000000),
      duration: state.duration,
      measureIn: state.measureIn,
      description: state.description,
      location: state.location,
      coordinates: state.coordinates,
      proposed_amount: state.proposed_amount,
      isToBeMobilised: state.isToBeMobilised,
      budget_year: state.budget_year,
      status: state.status,
      approval_threshold: state.approval_threshold,
    };

    if (update) {
      alter("projects", state.id, data)
        .then((res) => {
          setProjects(
            projects.map((project) => {
              if (project.id === res.data.data.id) {
                return res.data.data;
              }

              return project;
            })
          );

          setState(initialState);

          setOpenModal(false);
          setUpdate(false);
        })
        .catch((err) => console.log(err.message));
    } else {
      store("projects", data)
        .then((res) => {
          setProjects([res.data.data, ...projects]);
          // console.log(projects)
          setState(initialState);
          setOpenModal(false);
        })
        .catch((err) => console.log(err.message));
    }
  };

  const handleDelete = (id) => {
    destroy("projects", state.id)
      .then((res) => {
        setProjects(
          projects.filter((project) => project.id !== res.data.data.id)
        );
        setState(initialState);
        setOpenModal(false);
        setUpdate(false);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { key: "description", label: "Description" },
    { key: "reference_no", label: "Code" },
    { key: "location", label: "Location" },
    { key: "status", label: "Status" },
  ];

  useEffect(() => {
    collectAll("projects")
      .then((res) => setProjects(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    collectAll("serviceCategories")
      .then((res) => setServiceCategories(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if (awardReq.approved_amount > 0 || awardReq.mobilization > 0) {
      setAwardReq({
        ...awardReq,
        payable: (awardReq.mobilization / 100) * awardReq.approved_amount,
      });
    }
  }, [awardReq.approved_amount, awardReq.mobilization]);

  return (
    <>
      <BreadCrumb pageName="Projects" handleDrawer={handleDrawer} />

      {openModal && (
        <div className="row">
          <div className="col-md-12">
            <CustomCard>
              <CustomCardHeader>
                <h5>{update ? "Update" : "Add"} Project</h5>
              </CustomCardHeader>
              <CustomCardBody>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <TextInputField
                        label="Description"
                        value={state.description}
                        onChange={(e) =>
                          setState({ ...state, description: e.target.value })
                        }
                        placeholder="Enter Project Description Here"
                        multiline={4}
                      />
                    </div>
                    <div className="col-md-8">
                      <TextInputField
                        label="Location"
                        value={state.location}
                        onChange={(e) =>
                          setState({ ...state, location: e.target.value })
                        }
                        placeholder="Enter Project Location"
                      />
                    </div>
                    <div className="col-md-4">
                      <TextInputField
                        label="Coordinates"
                        value={state.coordinates}
                        onChange={(e) =>
                          setState({ ...state, coordinates: e.target.value })
                        }
                        placeholder="Enter Project Coordinates"
                      />
                    </div>

                    <div className="col-md-5">
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
                    <div className="col-md-3">
                      <TextInputField
                        label="Coordinates"
                        type="number"
                        value={state.duration}
                        onChange={(e) =>
                          setState({ ...state, duration: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-4">
                      <CustomSelect
                        label="Duration Measure"
                        value={state.measureIn}
                        onChange={(e) =>
                          setState({
                            ...state,
                            measureIn: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value=""
                          label="Select Duration Measure"
                          disabled
                        />

                        {["Days", "Weeks", "Months", "Years"].map(
                          (measure, i) => (
                            <CustomSelectOptions
                              key={i}
                              value={measure.toLowerCase()}
                              label={measure}
                            />
                          )
                        )}
                      </CustomSelect>
                    </div>
                    <div className="col-md-6">
                      <CustomSelect
                        label="Duration Measure"
                        value={state.isToBeMobilised}
                        onChange={(e) =>
                          setState({
                            ...state,
                            isToBeMobilised: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value={0}
                          label="Is Mobilisation Required?"
                          disabled
                        />

                        {[
                          { key: 0, label: "No" },
                          { key: 1, label: "Yes" },
                        ].map((mob, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={mob.key}
                            label={mob.label}
                          />
                        ))}
                      </CustomSelect>
                    </div>
                    <div className="col-md-6">
                      <CustomSelect
                        label="Approval Threshold"
                        value={state.approval_threshold}
                        onChange={(e) =>
                          setState({
                            ...state,
                            approval_threshold: e.target.value,
                          })
                        }
                      >
                        <CustomSelectOptions
                          value=""
                          label="Select Approval Threshold"
                          disabled
                        />

                        {["PTB", "AO", "MTB", "FEC"].map((threshold, i) => (
                          <CustomSelectOptions
                            key={i}
                            value={threshold.toLowerCase()}
                            label={threshold}
                          />
                        ))}
                      </CustomSelect>
                    </div>
                    <div className="col-md-12">
                      <TextInputField
                        label="Budget Allocation"
                        type="number"
                        value={state.proposed_amount}
                        onChange={(e) =>
                          setState({
                            ...state,
                            proposed_amount: e.target.value,
                          })
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
          rows={projects}
          handleEdit={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Projects;
