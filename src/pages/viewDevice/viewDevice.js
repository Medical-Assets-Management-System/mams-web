import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import apiServices from "../../services/apiServices";

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
        console.log(deviceData);
        console.log(deviceData.id);
      })
      .catch((error) => console.log(error));
  }, []);
  return <div>{data.id}</div>;
}
