/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  alter,
  batchRequests,
  collectAll,
} from "../../utils/helpers/functions/controllers";
import { useUser } from "../../utils/hooks/useUser";
import moment from "moment";
import * as Icon from "react-feather";
import "./procurement.css";
import Alert from "../../utils/helpers/classes/Alert";

const ManageVendor = () => {
  const location = useLocation();
  const auth = useUser();
  const [vendor, setVendor] = useState({});
  const [documentations, setDocumentations] = useState([]);
  const [companyDocuments, setCompanyDocuments] = useState([]);
  const [intersections, setIntersections] = useState([]);

  const handleAddressScore = (address) => {
    const score = address.type === "hq" ? 5 : 3;

    const data = {
      score,
      address_id: address.id,
    };

    try {
      alter(`update/companies`, vendor.id, data)
        .then((res) => {
          const result = res.data;
          setVendor(result.data);
          Alert.success("Updated!!", result.message);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDocumentationScore = (document) => {
    try {
      alter("sight/documentations", document.id, {
        status: "checked",
        vendor_id: vendor.id,
      })
        .then((res) => {
          const result = res.data;

          setDocumentations(
            documentations.map((doc) => {
              if (result.data.id == doc.id) {
                return result.data;
              }
              return doc;
            })
          );

          Alert.success("Updated!", result.message);
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location.state && location.state.vendor) {
      const vendor = location.state.vendor;

      setVendor(vendor);
    }
  }, []);

  useEffect(() => {
    if (vendor) {
      try {
        const docData = collectAll("documentations");
        const compData = collectAll("companyDocuments");

        batchRequests([docData, compData])
          .then(
            axios.spread((...res) => {
              const arr = [];
              const documentationsLoad = res[0].data.data;
              const companyDocumentsLoad = res[1].data.data;

              const vendorDocData = documentationsLoad.filter(
                (doc) => doc && doc.company_id == vendor.id
              );

              // console.log(companyDocumentsLoad);

              const intersection = companyDocumentsLoad.filter((doc) =>
                vendorDocData.some(
                  (document) => doc.id == document.company_document_id
                )
              );

              intersection.map((innt) => innt && arr.push(innt.id));

              setIntersections(arr);

              setCompanyDocuments(
                companyDocumentsLoad.filter(
                  (doc) =>
                    doc &&
                    doc.parentId == 0 &&
                    !arr.includes(doc.id) &&
                    doc.type === "fillable"
                )
              );
              setDocumentations(vendorDocData);
              // setIntersections(intersection);
            })
          )
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error);
      }
    }
  }, [vendor]);

  console.log(vendor, companyDocuments);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="jumbotron">
            <span className="badge badge-pill badge-primary">
              {vendor.category}
            </span>
            <h4 className="text-muted mt-3 mb-0">{vendor.name}</h4>
            <p className="text-success mb-0">
              {vendor.email + " - " + vendor.mobile}
            </p>
            <p className="text-muted mb-0">
              <strong>RC: </strong> {vendor.registration_no} -{" "}
              <strong>TIN: </strong> {vendor.tin_no}
            </p>
            <p className="text-muted">
              <strong>Regisered:</strong>{" "}
              {moment(vendor.created_at).format("LL")}
            </p>
          </div>
        </div>

        {vendor.addresses && vendor.addresses.length > 0 && (
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  {vendor.addresses.map((address) => (
                    <div className="col-md-4" key={address.id}>
                      <div className="bid-card bg-success">
                        <p
                          style={{ fontSize: 12, fontWeight: 700 }}
                          className="text-uppercase text-warning"
                        >
                          {address.type === "hq"
                            ? "Head Office"
                            : "Branch Office"}
                        </p>
                        <p>{`${address.flat_no} ${address.street_one} ${
                          address.street_two ?? ""
                        }, ${address.zipcode} ${address.city} ${
                          address.state
                        } ${address.country}`}</p>

                        <button
                          className="btn btn-outline-warning btn-xs"
                          onClick={() => handleAddressScore(address)}
                          disabled={address.counter}
                        >
                          UPDATE SCORE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

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
                    <th>Action</th>
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
                        <td>
                          <button
                            className="btn btn-outline-primary btn-xs"
                            onClick={() =>
                              handleDocumentationScore(documentation)
                            }
                            disabled={documentation.status === "sighted"}
                          >
                            <Icon.CheckCircle
                              size={16}
                              style={{ marginTop: 4, marginBottom: 0 }}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <div className="card">
            <div className="card-body">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>Pending Documents</th>
                    <th>Necessity</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {companyDocuments.length > 0 &&
                    companyDocuments.map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.description}</td>
                        <td>{doc.necessity}</td>
                        <td>{doc.type}</td>
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

export default ManageVendor;
