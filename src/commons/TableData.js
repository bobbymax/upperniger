import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ButtonGroup,
  TablePagination,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const TableData = ({
  columns,
  rows,
  callToAction = null,
  extraCall = null,
  exportable,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.label}>{col.name.toUpperCase()}</TableCell>
            ))}
            {callToAction !== null ? (
              <TableCell>{"Action".toUpperCase()}</TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((col) => (
                    <TableCell key={col.label}>
                      <Typography variant="body2">{row[col.label]}</Typography>
                    </TableCell>
                  ))}
                  {callToAction !== null ? (
                    <TableCell>
                      <ButtonGroup>
                        <IconButton onClick={() => callToAction(row)}>
                          <Edit />
                        </IconButton>
                      </ButtonGroup>
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows ? rows.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableData;
