import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/results.css";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="results-container">
        <h1>No Results Available</h1>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const { candidate, exam, score, total, timeTaken } = data;
  const percentage = (score / total) * 100;
  const status = percentage >= 40 ? "Pass" : "Fail";

  return (
    <div className="results-container">
      <h1>Exam Results</h1>

      <div className="results-card">
        <h2>{exam}</h2>
        <p><strong>Candidate:</strong> {candidate}</p>
        <p><strong>Score:</strong> {score} / {total}</p>
        <p><strong>Time Taken:</strong> {timeTaken}</p>
        <p className={`status ${status.toLowerCase()}`}>
          <strong>Status:</strong> {status}
        </p>
      </div>

      <button onClick={() => navigate("/dashboard")} className="back-btn">
        Back to Dashboard
      </button>
    </div>
  );
}
