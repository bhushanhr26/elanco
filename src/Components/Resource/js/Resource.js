import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../../Backend";
import RawComponent from "../../RawComponent/js/RawComponent";
import "../css/Resource.css";

export default function Resource() {
  const [rawData, setRawData] = useState([]);
  const getResourceData = async () => {
    await axios
      .get(`${baseURL}/resources`)
      .then((res) => {
        setRawData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getResourceData();
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
