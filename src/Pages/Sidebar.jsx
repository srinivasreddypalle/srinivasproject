import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Online Exams</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/exams">Take Exam</Link></li>
        <li><Link to="/quizzes">Practice Tests</Link></li>
        <li><Link to="/results">Results & Reports</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </aside>
  );
}
