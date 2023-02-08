import React from "react";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="container body">
      <h1>What You want to see !!</h1>
      <div className="section-one justify-content-evenly my-5">
        <div
          className="mx-5 text-center cursor-pointer"
          onClick={() => navigate("/applications")}
        >
          Our Applications
        </div>
        <div
          className="mx-5 text-center cursor-pointer"
          onClick={() => navigate("/resources")}
        >
          Our Resources
        </div>
        {/* {rawData?.map((x, i) => {
          return (
            <div key={i}>
              <RawComponent elements={x} keys={i} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
