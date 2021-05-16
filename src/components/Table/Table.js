import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./Table.css";

function Tables({ wordCount, value }) {
  // wordCount.map((item, index) => console.table(item));
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    bold: {
      fontWeight: "bolder",
    },
    styleTable: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 40,
      overflowY: "auto",
      scrollbarWidth: "none",
    },
  });

  const classes = useStyles();
  return (
    <div className="table-container">
      <TableContainer className={classes.styleTable} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold} align="center">
                Word
              </TableCell>
              <TableCell className={classes.bold} align="center">
                Frequency
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wordCount.slice(0, value).map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.word}</TableCell>
                <TableCell align="center">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Tables;
