/* eslint-disable eqeqeq */
import React from "react";
import * as Icon from "react-feather";

const ProjectCard = ({
  placeBid = undefined,
  manageproject = undefined,
  manageBid = undefined,
  viewBids = undefined,
  auth = null,
  inviteToBid = undefined,
  project,
}) => {
  const {
    reference_no,
    location,
    description,
    progress,
    status,
    department_id,
    bids,
  } = project;

  const fetchBidders = (collection) => {
    const arr = [];

    collection.length > 0 &&
      collection.map((data) => data && arr.push(data.company_id));

    return arr;
  };

  return (
    <div className="project-box">
      <span className="badge badge-secondary">{status.toUpperCase()}</span>
      <h6>{reference_no}</h6>
      <div className="media">
        <Icon.MapPin size={16} style={{ marginRight: 5 }} />
        <div className="media-body">
          <p>{location}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="row details">
        <div className="col-6">
          <span>Issues </span>
        </div>
        <div className="col-6 font-primary">12 </div>
        <div className="col-6">
          {" "}
          <span>Resolved</span>
        </div>
        <div className="col-6 font-primary">5</div>
        <div className="col-6">
          {" "}
          <span>Comment</span>
        </div>
        <div className="col-6 font-primary">7</div>
      </div>
      {/* <div className="customers">
        <ul>
          <li className="d-inline-block">
            <img
              className="img-30 rounded-circle"
              src="../assets/images/user/3.jpg"
              alt=""
              data-original-title=""
              title=""
            />
          </li>
          <li className="d-inline-block">
            <img
              className="img-30 rounded-circle"
              src="../assets/images/user/5.jpg"
              alt=""
              data-original-title=""
              title=""
            />
          </li>
          <li className="d-inline-block">
            <img
              className="img-30 rounded-circle"
              src="../assets/images/user/1.jpg"
              alt=""
              data-original-title=""
              title=""
            />
          </li>
          <li className="d-inline-block ms-2">
            <p className="f-12">+10 More</p>
          </li>
        </ul>
      </div> */}
      <div className="project-status mt-4">
        <div className="media mb-0">
          <p>{progress}% </p>
          <div className="media-body text-end">
            <span>Done</span>
          </div>
        </div>
        <div className="progress" style={{ height: 5 }}>
          <div
            className="progress-bar-animated bg-primary progress-bar-striped"
            role="progressbar"
            style={{ width: progress + "%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="btn-group mt-4">
          {auth && auth.roleLabels.includes("procurement-officer") && (
            <>
              <button
                type="button"
                className="btn btn-xs btn-primary"
                onClick={() => inviteToBid(project)}
                disabled={status === "invitation-to-bid"}
              >
                INVITE TO BID
              </button>
              <button
                className="btn btn-xs btn-success"
                disabled={status !== "tenders"}
              >
                EVALUATE
              </button>
            </>
          )}
          {auth && auth.department_id == department_id && (
            <button
              type="button"
              className="btn btn-xs btn-secondary"
              onClick={() => manageproject(project)}
              disabled={status !== "pending"}
            >
              MANAGE
            </button>
          )}
          {bids.length > 0 && auth.type !== "vendor" && (
            <button
              type="button"
              className="btn btn-xs btn-dark"
              onClick={() => viewBids(project)}
            >
              VIEW BIDS
            </button>
          )}
          {auth &&
            auth.type === "vendor" &&
            !fetchBidders(bids).includes(auth.company_id) && (
              <button
                className="btn btn-xs btn-dark"
                onClick={() => placeBid(project)}
                disabled={status !== "invitation-to-bid"}
              >
                PLACE BID
              </button>
            )}

          {auth && auth.type === "vendor" && status === "in-review" && (
            <button
              className="btn btn-xs btn-dark"
              onClick={() => manageBid(project)}
            >
              UPDATE BID
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
