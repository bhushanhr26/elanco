import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../Backend";
import RawComponent from "../../RawComponent/js/RawComponent";
import "../css/Application.css";

export default function Application() {
  const [rawData, setRawData] = useState([]);
  const getRawData = async () => {
    await axios
      .get(`${baseURL}/applications`)
      .then((res) => {
        setRawData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getRawData();
  }, []);
  return (
    <div className="container">
     {rawData?.map((x, i) => {
          return (
            <div key={i}>
              <RawComponent elements={x} keys={i} />
            </div>
          );
        })}
    </div>
  );
}
