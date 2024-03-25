import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import LandingPage from "./landingPage";

function Revision(props: any) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}

export default Revision;
