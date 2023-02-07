import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../Backend";
import "../css/Main.css";
import RawComponent from "../../RawComponent/js/RawComponent";

export default function Main() {
  const [rawData, setRawData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

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
      <h1>List of Application</h1>
      <div className="section-one">
        {rawData?.map((x, i) => {
          return (
            <div key={i}>
              <RawComponent elements={x} keys={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
