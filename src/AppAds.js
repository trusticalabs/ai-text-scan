// src/AppAds.js
import React, { useEffect } from "react";

function AppAds() {
  useEffect(() => {
    // Redirect to the actual file
    window.location.href = process.env.PUBLIC_URL + "/app-ads.txt";
  }, []);

  return null;
}

export default AppAds;
