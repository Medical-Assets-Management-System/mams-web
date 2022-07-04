import React from "react";
import "./DashboardScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkating } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import BarChart from "../../components/BarChart";
export default function DashboardScreen() {
  return (
    <div className="dashboard-cont">
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

          <p class="">11500</p>
        </div>
        <div className="box-8 head">
          <h1>MAMS</h1>
          <TextField
            id="search-bar"
            className="text"
            label="Search by Device ID"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
        </div>

        <div className="box-2">
          <div class="card">
            <h4>Function fvgjmf v</h4>
            <p class="detail">11500</p>
          </div>
        </div>
        <div className="box-3">
          <div class="card">
            <h4>Function</h4>
            <p class="detail">500</p>
          </div>
        </div>
        <div className="box-4">
          <div class="card">
            <h4>Function</h4>
            <p class="detail">500</p>
          </div>
        </div>
        <div className="box-5">
          <div class="card">
            <h4>Function</h4>
            <p class="detail">500</p>
          </div>
        </div>
        <div className="box-6">
          <div class="card">
            <h4>Function</h4>
            <p class="detail">500</p>
          </div>
        </div>
        <div className="box-7">
          <div class="card">
            <h4>Function</h4>
            <p class="detail">500</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
