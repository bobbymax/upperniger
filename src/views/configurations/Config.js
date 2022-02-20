import React, { useEffect, useState } from "react";
import { collectAll, store } from "../../utils/helpers/functions/controllers";
import Breadcrumb from "../../components/theme/commons/BreadCrumb";
import CustomCard from "../../components/theme/commons/cards/CustomCard";
import CustomCardBody from "../../components/theme/commons/cards/CustomCardBody";
import TextInputField from "../../components/form/TextInputField";
import CustomSelect from "../../components/form/CustomSelect";
import CustomSelectOptions from "../../components/form/CustomSelectOptions";
import { useDispatch } from "react-redux";
import { fetchSiteConfig } from "../../features/configuration/configurationSlice";

const Config = () => {
  const [state, setState] = useState({});
  const [settings, setSettings] = useState([]);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const details = (txt) => {
    const arrs = txt.split(",");
    const options = [];

    arrs.forEach((el) => {
      const inner = el.split("|");
      const ams = {
        value: inner[0],
        label: inner[1],
      };

      options.push(ams);
    });

    return options;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      state,
    };

    store("portal/configuration", data)
      .then((res) => {
        const data = res.data;
        dispatch(fetchSiteConfig(data));
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const vals = {};
    settings.forEach((el) => {
      vals[el.key] = el.value;
    });
    setState(vals);
  }, [settings]);

  useEffect(() => {
    try {
      collectAll("settings")
        .then((res) => setSettings(res.data.data))
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Breadcrumb pageName="Portal Configuration" handleDrawer={handleDrawer} />

      <div className="row">
        <div className="col-md-12">
          <CustomCard>
            <CustomCardBody>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    {settings.length > 0 &&
                      settings.map((conf, i) => (
                        <div className="col-md-12" key={i}>
                          {conf.input_type === "text" && (
                            <TextInputField
                              label={conf.display_name}
                              name={conf.key}
                              value={state[conf.key]}
                              onChange={handleChange}
                              placeholder={`Enter ${conf.display_name}`}
                            />
                          )}
                          {conf.input_type === "textarea" && (
                            <TextInputField
                              label={conf.display_name}
                              name={conf.key}
                              value={state[conf.key]}
                              onChange={handleChange}
                              placeholder={`Enter ${conf.display_name}`}
                              multiline={4}
                            />
                          )}
                          {conf.input_type === "number" && (
                            <TextInputField
                              label={conf.display_name}
                              type={conf.input_type}
                              name={conf.key}
                              value={state[conf.key]}
                              onChange={handleChange}
                              placeholder={`Enter ${conf.display_name}`}
                            />
                          )}
                          {conf.input_type === "select" && (
                            <CustomSelect
                              label={conf.display_name}
                              value={state[conf.key]}
                              onChange={handleChange}
                              name={conf.key}
                            >
                              <CustomSelectOptions
                                value=""
                                label={`Select ${conf.display_name}`}
                              />
                              {details(conf.details).map((det, index) => (
                                <CustomSelectOptions
                                  key={index}
                                  value={det.value}
                                  label={det.label}
                                />
                              ))}
                            </CustomSelect>
                          )}
                        </div>
                      ))}
                    <div className="col-md-12 mt-3">
                      <button type="submit" className={`btn btn-primary mt-4`}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </CustomCardBody>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default Config;
