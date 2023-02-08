import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL } from "../../../Backend";
import ResourceCard from "../../ResourceCard/js/ResourceCard";
import "../css/ResourceData.css";

export default function ResourceData() {
  const [applicationData, setApplicationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const getResourceData = async () => {
    setIsLoading(true);
    await axios
      .get(`${baseURL}/resources/${params.resName}`)
      .then((res) => {
        setApplicationData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        throw new Error(err);
      });
  };

  useEffect(() => {
    getResourceData();
  }, []);
  return (
    <div className="container">
      {applicationData?.map((data, i) => {
        return (
          <div key={i}>
            <ResourceCard
              isLoading={isLoading}
              setIsLoading={setIsLoading}
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
