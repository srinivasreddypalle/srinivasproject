import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/exams.css";

export default function Exams() {
  const navigate = useNavigate();

  // Example exam data (later from backend)
  const exams = [
    { id: 1, title: "Math Exam", description: "Algebra, Geometry, and Calculus basics" },
    { id: 2, title: "Science Exam", description: "Physics, Chemistry, and Biology concepts" },
    { id: 3, title: "English Exam", description: "Grammar, Vocabulary, and Comprehension" },
  ];

  return (
    <div className="page-container">
      <h1>Available Exams</h1>
      <div className="exam-list">
        {exams.map((exam) => (
          <div key={exam.id} className="exam-card">
            <h2>{exam.title}</h2>
            <p>{exam.description}</p>
            <button onClick={() => navigate(`/exams/${exam.id}`)}>
              Start Exam
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
