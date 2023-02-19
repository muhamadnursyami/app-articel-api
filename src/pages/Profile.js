import React, { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <div className="section">
      <h1 className="section-title">Profile Saya </h1>

      <p className="section-description">
        Profile : Muhamad Nur Syami <br />
        Student : Maritim Raja Ali Haji University
        <br />
        From: Indonesia
      </p>
    </div>
  );
}
