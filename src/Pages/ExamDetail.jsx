import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/examdetail.css";

export default function ExamDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [answers, setAnswers] = useState({});

  // --- Exam Data with 5 Questions Each ---
  const examDetails = {
    1: {
      title: "Math Exam",
      duration: 30,
      instructions: [
        "Attempt all questions",
        "No negative marking",
        "Use rough paper for calculations",
      ],
      questions: [
        { q: "What is 5 + 7?", options: ["10", "11", "12", "13"], correct: "12" },
        { q: "What is 8 × 6?", options: ["42", "48", "56", "60"], correct: "48" },
        { q: "What is the square root of 81?", options: ["7", "8", "9", "10"], correct: "9" },
        { q: "If a triangle has sides 3, 4, 5, it is a?", options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"], correct: "Right-angled" },
        { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], correct: "30" },
      ],
    },
    2: {
      title: "Science Exam",
      duration: 20,
      instructions: [
        "Answer all questions",
        "Be concise",
        "Choose the best option",
      ],
      questions: [
        { q: "Which gas is essential for breathing?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: "Oxygen" },
        { q: "What is the boiling point of water?", options: ["50°C", "100°C", "150°C", "200°C"], correct: "100°C" },
        { q: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct: "Mars" },
        { q: "What is H2O commonly known as?", options: ["Salt", "Acid", "Water", "Oxygen"], correct: "Water" },
        { q: "Which organ pumps blood in the human body?", options: ["Lungs", "Brain", "Heart", "Kidneys"], correct: "Heart" },
      ],
    },
    3: {
      title: "English Exam",
      duration: 25,
      instructions: [
        "Read questions carefully",
        "Each correct answer carries 1 mark",
      ],
      questions: [
        { q: "Choose the correct synonym of 'Happy':", options: ["Sad", "Joyful", "Angry", "Tired"], correct: "Joyful" },
        { q: "Which of these is a noun?", options: ["Run", "Quickly", "Happiness", "Jump"], correct: "Happiness" },
        { q: "Fill in the blank: She ___ going to school.", options: ["is", "are", "were", "am"], correct: "is" },
        { q: "Which is the opposite of 'Cold'?", options: ["Hot", "Warm", "Chill", "Freeze"], correct: "Hot" },
        { q: "Pick the correct spelling:", options: ["Recieve", "Receive", "Receeve", "Receve"], correct: "Receive" },
      ],
    },
  };

  const exam = examDetails[id] || { title: "Unknown Exam", duration: 0, instructions: [], questions: [] };

  // Timer
  useEffect(() => {
    let timer;
    if (started && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSubmitExam();
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleStartExam = () => {
    setStarted(true);
    setTimeLeft(exam.duration * 60);
    setElapsed(0);
  };

  const handleOptionChange = (qIndex, option) => {
    setAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  const handleSubmitExam = () => {
    let score = 0;
    exam.questions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });

    navigate("/results", {
      state: {
        candidate: "John Doe",
        exam: exam.title,
        score: score,
        total: exam.questions.length,
        timeTaken: formatTime(elapsed),
      },
    });
  };

  return (
    <div className="exam-detail-container">
      <h1>{exam.title}</h1>
      <p>
        <strong>Duration:</strong> {exam.duration} minutes
      </p>

      {/* Instructions BEFORE exam */}
      {!started && (
        <>
          <div className="instructions">
            <h2>Instructions</h2>
            <ul>
              {exam.instructions.map((inst, i) => (
                <li key={i}>{inst}</li>
              ))}
            </ul>
          </div>
          <div className="exam-detail-actions">
            <button onClick={handleStartExam}>Begin Exam</button>
            <button className="btn-cancel" onClick={() => navigate("/exams")}>
              Back to Exams
            </button>
          </div>
        </>
      )}

      {/* Questions AFTER exam starts */}
      {started && (
        <>
          {/* Timer + Progress */}
          <div className="exam-header">
            <div className="exam-timer">
              <strong>Time Left:</strong> {formatTime(timeLeft)}
            </div>
            <div className="exam-progress">
              Progress: {Object.keys(answers).length} / {exam.questions.length}
            </div>
          </div>

          <div className="questions-container">
            {exam.questions.map((q, index) => (
              <div key={index} className="question-card">
                <h3>
                  Q{index + 1}. {q.q}
                </h3>
                <div className="options">
                  {q.options.map((opt, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name={`q-${index}`}
                        value={opt}
                        checked={answers[index] === opt}
                        onChange={() => handleOptionChange(index, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="exam-detail-actions">
            <button onClick={handleSubmitExam}>Submit Exam</button>
            <button className="btn-cancel" onClick={() => navigate("/exams")}>
              Cancel Exam
            </button>
          </div>
        </>
      )}
    </div>
  );
}
