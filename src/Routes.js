import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Application from "./Components/Application/js/Application";
import ApplicationData from "./Components/ApplicationData/js/ApplicationData";
import Error from "./Components/Error/js/Error";
import Main from "./Components/Main/js/Main";
import Resource from "./Components/Resource/js/Resource";
import ResourceData from "./Components/ResourceData/js/ResourceData";

export default function ElancoRoutes() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          exact
          path="applications/:appName"
          element={<ApplicationData />}
        />
        <Route exact path="/applications" element={<Application />} />
        <Route exact path="/resources" element={<Resource />} />
        <Route exact path="resources/:resName" element={<ResourceData />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}
