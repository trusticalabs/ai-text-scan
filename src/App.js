import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Description from "./Description";
import AppAds from "./AppAds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/app-ads.txt" element={<AppAds />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="/" element={<Description />} />
      </Routes>
    </Router>
  );
}

export default App;
