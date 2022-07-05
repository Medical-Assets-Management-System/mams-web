import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import apiServices from "../../services/apiServices";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function ViewDevice() {
  let deviceData = { id: 1 };
  let test = { id: 1 };
  let { deviceID } = useParams();
  deviceID = deviceID.substring(1);
  console.log(deviceID);
  const [data, setdata] = useState("");
  useEffect(() => {
    apiServices
      .getMedicalDevice(deviceID)
      .then(async (response) => {
        setdata(response.data);
        console.log(response.data);
        console.log(deviceData.id);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Equipment Details
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Maintenance Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Equipment Number
              </TableCell>
              <TableCell align="center">{data.equipment_num}</TableCell>
              <TableCell component="th" scope="row">
                manufacturer Company
              </TableCell>
              <TableCell align="center">{data.manufacturer}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Equipment
              </TableCell>
              <TableCell align="center">{data.equipment_name}</TableCell>
              <TableCell component="th" scope="row">
                Maintenance Company
              </TableCell>
              <TableCell align="center">Life Care</TableCell>
            </TableRow>
            {/* ///// */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Model
              </TableCell>
              <TableCell align="center">{data.model}</TableCell>
              <TableCell component="th" scope="row">
                Warranty
              </TableCell>
              <TableCell align="center">{data.warranty}</TableCell>
            </TableRow>
            {/* \\\\ */}

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Hospital ID
              </TableCell>
              <TableCell align="center">{data.hospital_id}</TableCell>
              <TableCell component="th" scope="row">
                Warranty Period
              </TableCell>
              <TableCell align="center">{data.warranty_period}</TableCell>
            </TableRow>
            {/* \\\\ */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Department
              </TableCell>
              <TableCell align="center">{data.department}</TableCell>
              <TableCell component="th" scope="row">
                Contract
              </TableCell>
              <TableCell align="center">{data.contract}</TableCell>
            </TableRow>
            {/* \\\\ */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Floor
              </TableCell>
              <TableCell align="center">{data.floor}</TableCell>
              <TableCell component="th" scope="row">
                PPM Date
              </TableCell>
              <TableCell align="center">{data.ppm_date}</TableCell>
            </TableRow>
            {/* \\\\ */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Room Number
              </TableCell>
              <TableCell align="center">{data.room}</TableCell>
              <TableCell component="th" scope="row">
                PPM Frequency
              </TableCell>
              <TableCell align="center">{data.ppm_frequency}</TableCell>
            </TableRow>
            {/* \\\\ */}
            {/* \\\\ */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Installation Date
              </TableCell>
              <TableCell align="center">{data.installation_date}</TableCell>
            </TableRow>
            {/* \\\\ */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                Responsibe Person
              </TableCell>
              <TableCell align="center">{data.responsible_personnel}</TableCell>
            </TableRow>
            {/* \\\\ */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
