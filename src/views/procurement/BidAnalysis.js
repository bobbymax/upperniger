/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import "./procurement.css";
import { formatCurrency } from "../../utils/helpers/functions";
// import bg from "../../assets/new/images/dashboard/folder.png";

const BidAnalysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState({});

  const handleCompanyAnalysis = (bid) => {
    navigate(`/evaluate/${bid.id}/company`, {
      state: {
        bid,
        project,
      },
    });
  };

  useEffect(() => {
    if (location.state && location.state.project) {
      try {
        setProject(location.state.project);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  console.log(project);

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

        <div className="col-md-12">
          <div className="row">
            {project.bids &&
              project.bids.length > 0 &&
              project.bids.map((bid) => (
                <div className="col-md-3" key={bid.id}>
                  <div className="bid-card bg-success">
                    <h6>{bid.company && bid.company.name}</h6>
                    <p> {formatCurrency(bid.amount)}</p>
                    <h4 className="text-warning">{`${
                      bid.company && bid.company.score
                    }%`}</h4>
                    <div
                      className="btn btn-outline-secondary btn-xs mt-3"
                      onClick={() => handleCompanyAnalysis(bid)}
                    >
                      View Bid
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BidAnalysis;
