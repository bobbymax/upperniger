import React, { useEffect, useState } from "react";
import * as Icon from "react-feather";
import TableHeader from "./tables/TableHeader";
import TableBody from "./tables/TableBody";
import TableRow from "./tables/TableRow";
import CustomPagination from "./tables/CustomPagination";
import "./tables/table.css";
import { search } from "../../../utils/helpers/functions";

const TableCard = ({
  columns,
  rows,
  handleEdit = undefined,
  handleDelete = undefined,
  assignRole = undefined,
  manageVendor = undefined,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchKey, setSearchKey] = useState("");
  const [computed, setComputed] = useState([]);

  useEffect(() => {
    if (searchKey !== "") {
      setComputed(search(searchKey, rows));
    } else {
      setComputed(rows);
    }
  }, [rows, searchKey]);

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <div className="table-search mb-3">
            <div className="row">
              <div className="col-md-2">
                <select
                  className="form-select btn-square digits"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(e.target.value)}
                >
                  {[2, 10, 15, 25, 50, 100].map((dist, i) => (
                    <option key={i} value={dist}>
                      Show {dist} Entries
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-10">
                <div className="pull-right">
                  <input
                    className="form-control"
                    placeholder="Search Entries Here"
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <TableHeader
                columns={columns}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                assignRole={assignRole}
                manageVendor={manageVendor}
              />
              <TableBody>
                {computed.length > 0 ? (
                  computed
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      (currentPage - 1) * itemsPerPage + itemsPerPage
                    )
                    .map((row, i) => (
                      <TableRow key={i}>
                        {columns.map((col) => (
                          <td key={col.key}>{row[col.key]}</td>
                        ))}
                        {(handleEdit !== undefined ||
                          handleDelete !== undefined ||
                          assignRole !== undefined ||
                          manageVendor !== undefined) && (
                          <td>
                            {handleEdit !== undefined && (
                              <Icon.Edit2
                                size={16}
                                onClick={() => handleEdit(row)}
                              />
                            )}{" "}
                            {handleDelete !== undefined && (
                              <Icon.Trash2
                                size={16}
                                onClick={() => handleDelete(row.id)}
                              />
                            )}
                            {assignRole !== undefined && (
                              <Icon.Bookmark
                                size={16}
                                onClick={() => assignRole(row)}
                              />
                            )}
                            {manageVendor !== undefined && (
                              <Icon.Settings
                                size={16}
                                onClick={() => manageVendor(row)}
                              />
                            )}
                          </td>
                        )}
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <td
                      colSpan={
                        handleEdit !== undefined || manageVendor !== undefined
                          ? columns.length + 1
                          : columns.length
                      }
                      className="text-danger"
                    >
                      No Data Found!!!
                    </td>
                  </TableRow>
                )}
              </TableBody>
            </table>
          </div>
          <div className="pagination justify-content-center">
            <CustomPagination
              total={rows.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
