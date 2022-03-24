/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { alter, collectAll } from "../../utils/helpers/functions/controllers";
import moment from "moment";
import "./procurement.css";
import { formatCurrency } from "../../utils/helpers/functions";
import TextInputField from "../../components/form/TextInputField";
import ReactS3 from "react-s3";
import { allowedFileTypes, config, getFileExt } from "../../utils";
import Alert from "../../utils/helpers/classes/Alert";

const VendorCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialState = {
    project_id: 0,
    bid_id: 0,
    src: "",
    invitation: "",
    path: "",
    file: null,
    error: false,
    message: "",
  };

  const [state, setState] = useState(initialState);
  const [bid, setBid] = useState({});
  const [project, setProject] = useState({});
  const [documentations, setDocumentations] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleUpload = (e) => {
    const { value, files } = e.target;
    const file = files[0];

    const allowed = allowedFileTypes.includes(getFileExt(file.name));

    if (allowed) {
      setState({
        ...state,
        invitation: value,
        src: URL.createObjectURL(file),
        file: file,
        error: false,
        message: "All Good!!",
      });
    } else {
      setState({
        ...state,
        invitation: "",
        src: "",
        file: null,
        error: true,
        message: "This file is not supported",
      });
    }
  };

  const sendInvite = (e) => {
    e.preventDefault();

    ReactS3.uploadFile(state.file, config)
      .then((data) => {
        console.log(data);

        const request = {
          bid_id: state.bid_id,
          invitation: data.location,
          technical_document: "",
          financial_document: "",
          status: "invitation",
        };

        try {
          alter("bids", request.bid_id, request)
            .then((res) => {
              const data = res.data;
              setBid(data.data);
              setState(initialState);
              Alert.success("Invitation Sent!!", data.message);
            })
            .catch((err) => console.log(err.message));
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    if (location.state && location.state.project && location.state.bid) {
      const project = location.state.project;
      const bid = location.state.bid;

      setProject(project);
      setBid(bid);
      setState({
        ...state,
        project_id: project.id,
        bid_id: bid.id,
      });

      try {
        collectAll("documentations")
          .then((res) => {
            const result = res.data.data;
            setDocumentations(
              result.filter((data) => data && data.company_id == bid.company_id)
            );
          })
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="jumbotron">
            <span className="badge badge-pill badge-primary">
              {bid.company && bid.company.category}
            </span>
            <h4 className="text-muted mt-3 mb-0">
              {bid.company && bid.company.name}
            </h4>
            <p className="text-success mb-0">
              {bid.company && bid.company.email + " - " + bid.company.mobile}
            </p>
            <p className="text-muted mb-0">
              <strong>RC: </strong> {bid.company && bid.company.registration_no}{" "}
              - <strong>TIN: </strong> {bid.company && bid.company.tin_no}
            </p>
            <p className="text-muted">
              <strong>Regisered:</strong>{" "}
              {moment(bid.company && bid.company.created_at).format("LL")}
            </p>

            <button
              type="button"
              className="btn btn-warning"
              onClick={handleOpen}
              disabled={open || bid.invation !== ""}
            >
              INVITE TO BID
            </button>
          </div>
        </div>
        {open && (
          <form className="mb-4" onSubmit={sendInvite}>
            <TextInputField
              label="Upload Invitation"
              type="file"
              name="invitation"
              value={state.invitation}
              onChange={handleUpload}
            />

            <div className="btn-group">
              <button type="submit" className="btn btn-success btn-sm">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  setState({
                    ...state,
                    src: "",
                    invitation: "",
                    path: "",
                    file: null,
                    error: false,
                    message: "",
                  });
                  setOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h6>Bid Documents</h6>
            </div>
            <div className="card-body">
              <div className="row">
                {bid.proposal !== null && (
                  <div className="col-md-3">
                    <div className="bid-card bg-success">
                      <h6>Porposal Document</h6>
                      <p>{formatCurrency(bid.amount)}</p>
                      <a
                        className="btn btn-outline-secondary btn-xs"
                        href={bid.proposal}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Proposal
                      </a>
                    </div>
                  </div>
                )}
                {bid.invitation !== null && (
                  <div className="col-md-3">
                    <div className="bid-card bg-success">
                      <h6>Invitation Document</h6>
                      <p>submission</p>
                      <a
                        className="btn btn-outline-secondary btn-xs"
                        href={bid.invitation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Invitation
                      </a>
                    </div>
                  </div>
                )}
                {bid.technical_document !== null && (
                  <div className="col-md-3">
                    <div className="bid-card bg-success">
                      <h6>Technical</h6>
                      <p>document</p>
                      <a
                        className="btn btn-outline-secondary btn-xs"
                        href={bid.technical_document}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Technical
                      </a>
                    </div>
                  </div>
                )}

                {bid.financial_document !== null && (
                  <div className="col-md-3">
                    <div className="bid-card bg-success">
                      <h6>Financials</h6>
                      <p>document</p>
                      <a
                        className="btn btn-outline-secondary btn-xs"
                        href={bid.financial_document}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Financial
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>Documents</th>
                    <th>Path</th>
                    <th>Status</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {documentations.length > 0 &&
                    documentations.map((documentation) => (
                      <tr key={documentation.id}>
                        <td>{documentation.documentName}</td>
                        <td>
                          {documentation.path !== null ? (
                            <a
                              href={documentation.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-xs btn-primary"
                            >
                              View
                            </a>
                          ) : (
                            "Not Available"
                          )}
                        </td>
                        <td>{documentation.status}</td>
                        <td>{documentation.score}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorCheck;
