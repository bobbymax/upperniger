/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../../components/projects/ProjectCard";
import Alert from "../../utils/helpers/classes/Alert";
import { collectAll } from "../../utils/helpers/functions/controllers";
import { useUser } from "../../utils/hooks/useUser";

const Bids = () => {
  const [projects, setProjects] = useState([]);

  const tenders = useSelector((state) => state.configuration.value.tenders);
  const auth = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const handleBid = (project) => {
    // console.log(project);

    navigate(`/projects/${project.reference_no}/bid`, {
      state: {
        project,
      },
    });
  };

  const manageBid = (project) => {
    console.log(project);

    navigate(`/projects/${project.reference_no}/bid`, {
      state: {
        project,
      },
    });
  };

  const viewBids = (project) => {
    console.log(project);

    navigate(`/project/${project.reference_no}/bids`, {
      state: {
        project,
      },
    });
  };

  useEffect(() => {
    try {
      collectAll("projects")
        .then((res) => {
          const result = res.data.data;

          setProjects(
            result.filter(
              (project) =>
                project &&
                (project.status === "invitation-to-bid" ||
                  project.status === "in-review")
            )
          );
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.status) {
      const status = location.state.status;

      Alert.success("Bid Placed!", status);
    }
  }, []);

  console.log(projects);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {tenders === "open" && projects.length > 0 ? (
                  projects.map((project) => (
                    <div key={project.id} className="col-md-4 col-lg-6">
                      <ProjectCard
                        auth={auth}
                        project={project}
                        placeBid={handleBid}
                        manageBid={manageBid}
                        viewBids={viewBids}
                      />
                    </div>
                  ))
                ) : (
                  <div className="alert alert-badge alert-danger">
                    Tenders is not yet open!!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bids;
