import React from "react";
import "../styles/profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="profile-page">
        <h2>No profile data found</h2>
        <p>Please login or sign up to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>

      <div className="profile-details">
        <h2>Profile Information</h2>
        <div className="detail-row">
          <span className="label">Full Name:</span>
          <span className="value">{user.name}</span>
        </div>
        <div className="detail-row">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>
        <div className="detail-row">
          <span className="label">Role:</span>
          <span className="value">Student</span>
        </div>
        <div className="detail-row">
          <span className="label">Joined:</span>
          <span className="value">September 2025</span>
        </div>
      </div>
    </div>
  );
}
