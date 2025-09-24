import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/settings.css";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-buttons">
        <button
          className="settings-btn"
          onClick={() => navigate("/settings/change-password")}
        >
          Change Password
        </button>

        <button
          className="settings-btn"
          onClick={() => navigate("/settings/update-email")}
        >
          Update Email
        </button>

        <button
          className="settings-btn"
          onClick={() => navigate("/settings/notifications")}
        >
          Notification Preferences
        </button>
      </div>
    </div>
  );
};

export default Settings;
