/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../utils/hooks/useUser";
import "./procurement.css";
import * as Icon from "react-feather";
import moment from "moment";
import TextInputField from "../../components/form/TextInputField";
import ReactS3 from "react-s3";
import { allowedFileTypes, config, getFileExt } from "../../utils";
import { alter, store } from "../../utils/helpers/functions/controllers";
import Alert from "../../utils/helpers/classes/Alert";
// import Alert from "../../utils/helpers/classes/Alert";

const PlaceBid = () => {
  const auth = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = {
    id: 0,
    project_id: 0,
    company_id: 0,
    amount: 0,
    proposed_amount: 0,
    src: "",
    proposal: "",
    technical_document: "",
    financial_document: "",
    path: "",
    error: false,
    message: "",
    size: 0,
    description: "",
    file: null,
  };

  const [project, setProject] = useState({});
  const [bid, setBid] = useState({});
  const [state, setState] = useState(initialState);

  const handleUpload = (e) => {
    const { name, value, files } = e.target;
    const file = files[0];
    // const value = e.target.value;

    // console.log(name);

    const allowed = allowedFileTypes.includes(getFileExt(file.name));

    if (allowed) {
      setState({
        ...state,
        [name]: value,
        src: URL.createObjectURL(file),
        file: file,
        size: file.size,
        error: false,
        message: "All Good!!",
      });
    } else {
      setState({
        ...state,
        [name]: "",
        src: "",
        file: null,
        size: 0,
        error: true,
        message: "This file is not supported",
      });
    }
  };

  const placeBid = (e) => {
    e.preventDefault();

    ReactS3.uploadFile(state.file, config)
      .then((data) => {
        console.log(data);

        const request = {
          project_id: state.project_id,
          company_id: state.company_id,
          amount: state.amount,
          // proposal: data.location,
        };

        if (bid) {
          request["bid_id"] = bid.id;
          if (bid.technical_document !== null) {
            request["financial_document"] = data.location;
          } else {
            request["technical_document"] = data.location;
          }
          request["status"] = "tenders";
          try {
            alter("bids", bid.id, request)
              .then((res) => {
                const result = res.data;

                setBid(result.data);
                setState(initialState);
                Alert.success("Updated!!", result.message);
              })
              .catch((err) => console.log(err.message));
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            request["proposal"] = data.location;
            store("bids", request)
              .then((res) => {
                const data = res.data;
                setBid(data.data);
                setState(initialState);
                navigate("/bid/invitations", {
                  state: {
                    status: data.message,
                  },
                });
                // Alert.success("Bid Placed!!", data.message);
              })
              .catch((err) => console.log(err.message));
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (location.state && location.state.project) {
      try {
        const project = location.state.project;
        setProject(project);
        const bid =
          project.bids && project.bids.length > 0
            ? project.bids.filter(
                (bid) =>
                  bid &&
                  bid.company_id == auth.company_id &&
                  bid.project_id == project.id
              )
            : {};

        setBid(bid[0]);
        setState({
          ...state,
          project_id: project.id,
          company_id: auth.company_id,
          amount: bid[0] ? parseFloat(bid[0].amount) : 0,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/bid/invitations");
    }
  }, []);

  console.log(bid);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="jumbotron">
            <span className="badge badge-pill badge-primary">
              {project.category && project.category.name}
            </span>
            <h4 className="text-muted mt-3 mb-0">{project.description}</h4>
            <p className="text-success">
              <Icon.MapPin size={13} style={{ marginRight: 6 }} />
              {project.location + "  -  " + project.coordinates}
            </p>

            <p className="text-muted">
              Published: {moment(project.updated_at).format("LL")} - Duration:{" "}
              {project.duration + " " + project.measureIn}
            </p>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <form onSubmit={placeBid}>
                <TextInputField
                  label="Upload Proposal (max 2MB)"
                  type="file"
                  name="proposal"
                  value={state.proposal}
                  onChange={handleUpload}
                  disabled={project && project.status === "in-review"}
                />

                {bid &&
                  bid.status === "invitation" &&
                  auth &&
                  auth.type === "vendor" && (
                    <>
                      <TextInputField
                        label="Upload Technical Document (max 2MB)"
                        type="file"
                        value={state.technical_document}
                        name="technical_document"
                        onChange={handleUpload}
                      />
                    </>
                  )}

                {bid &&
                  bid.status === "tenders" &&
                  auth &&
                  auth.type === "vendor" &&
                  bid.technical_document !== null &&
                  bid.financial_document === null && (
                    <TextInputField
                      label="Upload Financial Document (max 2MB)"
                      type="file"
                      value={state.financial_document}
                      name="financial_document"
                      onChange={handleUpload}
                    />
                  )}

                <TextInputField
                  label="Proposed Amount"
                  placeholder="Enter Proposed Amount Here"
                  value={state.amount}
                  onChange={(e) =>
                    setState({ ...state, amount: parseFloat(e.target.value) })
                  }
                  disabled={bid && bid.amount > 0}
                />

                <div className="btn-group mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm"
                    disabled={
                      bid &&
                      bid.status === "tenders" &&
                      bid.financial_document !== null
                    }
                  >
                    {bid ? "Update" : "Place"} Bid
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setState(initialState);
                      navigate("/bid/invitations");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card" style={{ height: 480 }}>
            {state.src !== "" && (
              <iframe
                src={state.src}
                title="Proposal File"
                frameBorder="0"
                style={{ height: 480 }}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceBid;
