import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicationData from "./Components/ApplicationData/js/ApplicationData";
import Error from "./Components/Error/js/Error";
import Main from "./Components/Main/js/Main";

export default function ElancoRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:appName" element={<ApplicationData />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}
