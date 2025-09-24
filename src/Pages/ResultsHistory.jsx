import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/resultshistory.css";

export default function ResultsHistory() {
  const navigate = useNavigate();

  // Mock results history (later fetch from backend / DB)
  const results = [
    { exam: "Math Exam", score: 42, total: 50, timeTaken: "52:14", date: "2025-09-18" },
    { exam: "Science Exam", score: 28, total: 40, timeTaken: "01:12:33", date: "2025-09-15" },
    { exam: "English Exam", score: 25, total: 30, timeTaken: "38:29", date: "2025-09-10" },
  ];

  return (
    <div className="results-history-container">
      <h1>Results History</h1>

      <table className="results-table">
        <thead>
          <tr>
            <th>Exam</th>
            <th>Score</th>
            <th>Time Taken</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => {
            const percentage = (res.score / res.total) * 100;
            const status = percentage >= 40 ? "Pass" : "Fail";

            return (
              <tr key={index}>
                <td>{res.exam}</td>
                <td>{res.score} / {res.total}</td>
                <td>{res.timeTaken}</td>
                <td>{res.date}</td>
                <td className={`status ${status.toLowerCase()}`}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={() => navigate("/dashboard")} className="back-btn">
        Back to Dashboard
      </button>
    </div>
  );
}
