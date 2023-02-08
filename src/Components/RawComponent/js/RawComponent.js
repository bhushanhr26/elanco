import React from "react";
import { useNavigate } from "react-router-dom";

export default function RawComponent(props) {
  const { elements, keys } = props;
  const navigate = useNavigate();
  console.log(elements,"elements");
  return (
    <div
      className="d-flex flex-column rawdata-card mx-3 my-3 p-3 cursor-pointer"
      onClick={() => navigate(`${elements}`)}
    >
      <div>
        <span>{keys + 1}</span>. <span>{elements}</span>
      </div>
    </div>
  );
}
