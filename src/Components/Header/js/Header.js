import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

export default function Header() {
   const navigate = useNavigate()
  return (
    <div className="text-center main" onClick={()=>navigate("/")}>
      <HomeIcon />
    </div>
  );
}
