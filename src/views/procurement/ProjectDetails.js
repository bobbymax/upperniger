/* eslint-disable no-unused-vars */
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactS3 from "react-s3";
import { allowedFileTypes, config, getFileExt } from "../../utils";
import { store } from "../../utils/helpers/functions/controllers";

const ProjectDetails = () => {
  const initialState = {
    src: "",
    type: "",
    size: 0,
    error: false,
    mssg: "",
    file: null,
    amount: 0,
    location: "",
  };

  const location = useLocation();
  const [project, setProject] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [state, setState] = useState(initialState);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowed = allowedFileTypes.includes(getFileExt(file.name));

    if (!allowed) {
      setState({
        ...state,
        src: "",
        file: null,
        type: "",
        size: 0,
        error: true,
        mssg: "The file you are trying to upload is not supported",
      });
    } else {
      setState({
        ...state,
        src: URL.createObjectURL(file),
        file: file,
        error: false,
        mssg: "All good!!!",
        type: file.type,
        size: file.size,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ReactS3.uploadFile(state.file, config)
      .then((data) => {
        console.log(data);

        const requests = {
          project_id: project.id,
          company_id: 1,
          amount: state.amount,
          proposal: data.location,
        };

        try {
          store("bids", requests)
            .then((res) => {
              console.log(res.data.data);
              setState(initialState);
            })
            .catch((err) => console.log(err.message));
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (location && location.state !== null) {
      setProject(location.state);
    }
  }, [location]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12}>
          <Typography variant="h6" gutterBottom>
            {project && project.description}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  variant="outlined"
                  type="number"
                  label="Proposed Amount"
                  value={state.amount}
                  onChange={(e) =>
                    setState({ ...state, amount: e.target.value })
                  }
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  variant="outlined"
                  type="file"
                  label="Upload Proposal"
                  onChange={handleFileChange}
                  error={state.error}
                  helperText={state.mssg}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={state.file === null || state.amount === 0}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          {state.src !== "" && (
            <embed
              src={state.src}
              type="application/pdf"
              width="100%"
              height="640px"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectDetails;
