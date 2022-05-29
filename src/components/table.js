import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const volcanoes = {
  name: "Countrys",
  country: "United States",
  region: "United States",
  subregion: "University",
};

export default function VolcanoTable(volcanos) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Region&nbsp;(g)</TableCell>
            <TableCell align="right">Subregion&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {volcanos.map((volcano) => (
            <TableRow
              key={volcano.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
