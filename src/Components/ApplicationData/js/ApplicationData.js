import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../../Backend";
import ApplicationCard from "../../Application-card/js/ApplicationCard";
import "../css/ApplicationData.css";

export default function ApplicationData() {
  const [applicationData, setApplicationData] = useState([]);
  const params = useParams();
  const getApplicationData = async () => {
    await axios
      .get(`${baseURL}/applications/${params.appName}`)
      .then((res) => {
        console.log(res.data);
        setApplicationData(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getApplicationData();
  }, []);
  return (
    <div className="container">
      {applicationData?.map((data, i) => {
        return (
          <div key={i}>
            <ApplicationCard
              ConsumedQuantity={data?.ConsumedQuantity}
              Cost={data?.Cost}
              Date={data?.Date}
              Location={data?.Location}
              MeterCategory={data?.MeterCategory}
              ResourceGroup={data?.ResourceGroup}
              ResourceLocation={data?.ResourceLocation}
              ServiceName={data?.ServiceName}
              UnitOfMeasure={data?.UnitOfMeasure}
              Tags={data?.Tags}
            />
          </div>
        );
      })}
    </div>
  );
}
