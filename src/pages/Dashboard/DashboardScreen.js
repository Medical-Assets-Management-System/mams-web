import React from "react";
import "./DashboardScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkating } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import BarChart from "../../components/BarChart";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import AuthServices from "../../services/AuthService";
export default function DashboardScreen() {
  let { deviceID } = useParams();
  let navigate = useNavigate();
  const [search, setsearch] = useState(deviceID);
  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  const handleSubmit = () => {
    console.log(search);
    let path = `/viewDevice/:${search}`;
    navigate(path);
  };
  const logOutHandle = async () => {
    await AuthServices.logOut();
    let path = `/`;
    navigate(path);
  };
  const signUpHandle = () => {
    console.log("sign");
    let path = `/signup`;
    navigate(path);
  };
  return (
    <div className="dashboard-cont">
      <div className="btn-nav">
        <button className="btn" onClick={signUpHandle}>
          New Member
        </button>
        <button className="btn" onClick={logOutHandle}>
          Logout
        </button>
      </div>
      <div className="container">
        <div className="box-1 head">
          <div class="card">
            <div className="chart">
              <BarChart />
            </div>
          </div>
        </div>
        <div className="box-9 tottal head">
          <h4>Tottal Devices</h4>

          <p class="">750</p>
        </div>
        <div className="box-8 head">
          <h1>MAMS</h1>
          <div className="search-cont">
            <TextField
              id="search-bar"
              className="search-bar"
              label="Search by Device ID"
              variant="outlined"
              placeholder="Search..."
              size="small"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="search-btn">
              Search
            </button>
          </div>
        </div>

        <div className="box-2">
          <div class="card">
            <h4>Function Devices</h4>
            <p class="detail">600</p>
          </div>
        </div>
        <div className="box-3">
          <div class="card">
            <h4>Partially Function</h4>
            <p class="detail">100</p>
          </div>
        </div>
        <div className="box-4">
          <div class="card">
            <h4>Not Functioning</h4>
            <p class="detail">10</p>
          </div>
        </div>
        <div className="box-5">
          <div class="card">
            <h4>Scrapped</h4>
            <p class="detail">200</p>
          </div>
        </div>
        <div className="box-6">
          <div class="card">
            <h4>Waranty</h4>
            <p class="detail">500</p>
          </div>
        </div>
        <div className="box-7">
          <div class="card">
            <h4>No warranty</h4>
            <p class="detail">250</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
