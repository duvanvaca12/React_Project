import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function VolcanoTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Region&nbsp;(g)</TableCell>
            <TableCell align="right">Subregion&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.volcanos.map((volcano) => (
            <TableRow
              key={volcano.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Link to={`/volcano/${volcano.id}`}>
                  <AddIcon />
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                {volcano.name}
              </TableCell>
              <TableCell align="right">{volcano.country}</TableCell>
              <TableCell align="right">{volcano.region}</TableCell>
              <TableCell align="right">{volcano.subregion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
