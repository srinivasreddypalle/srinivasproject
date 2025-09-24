import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

const notifications = [
  "New Mathematics exam added for 25-Sep-2025.",
  "Your Science exam result is now available.",
  "System maintenance scheduled for 30-Sep-2025.",
];

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [recentExams, setRecentExams] = useState([]);
  const [stats, setStats] = useState([]);
  const userName = "Srinivas";

  const handleAction = (action) => {
    if (action === "Logout") {
      alert("Logging out...");
    } else {
      setActivePage(action);
    }
  };

  // Load results dynamically
  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem("results")) || [];

    const latestExams = storedResults.slice(-5).reverse();
    setRecentExams(latestExams);

    const totalExams = storedResults.length;
    const upcoming = 2; // Placeholder
    const pending = storedResults.filter((res) => res.status === "Pending").length;
    const average =
      totalExams > 0
        ? (
            storedResults.reduce((acc, res) => acc + parseInt(res.score), 0) / totalExams
          ).toFixed(0) + "%"
        : "0%";

    setStats([
      { title: "Exams Taken", value: totalExams },
      { title: "Upcoming Exams", value: upcoming },
      { title: "Results Pending", value: pending },
      { title: "Average Score", value: average },
    ]);
  }, [activePage]);

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Roboto', sans-serif" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#3867d6",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>Online Exams</h2>
        {["Home", "Profile", "Settings", "About Us", "Help"].map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            style={{
              backgroundColor: activePage === page ? "#4b7bec" : "transparent",
              border: "none",
              color: "white",
              padding: "12px 20px",
              textAlign: "left",
              marginBottom: "10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: activePage === page ? 600 : 500,
              transition: "0.3s",
            }}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handleAction("Logout")}
          style={{
            marginTop: "auto",
            backgroundColor: "#eb3b5a",
            border: "none",
            color: "white",
            padding: "12px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#f5f6fa", padding: "40px" }}>
        {/* Centered Header */}
<header style={{ marginBottom: "30px", textAlign: "center" }}>
  <h1 style={{ color: "#3867d6" }}>Hello, {userName}!</h1>
  <p style={{ fontSize: "18px", marginTop: "10px" }}>
    Welcome back to your Online Examination Dashboard.
  </p>
</header>


        {/* Home Page */}
        {activePage === "Home" && (
          <>
            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    padding: "30px 20px",
                    borderRadius: "14px",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                    flex: "1 1 220px",
                    textAlign: "center",
                  }}
                >
                  <h2 style={{ color: "#3867d6", fontSize: "26px", marginBottom: "8px" }}>
                    {stat.value}
                  </h2>
                  <p style={{ fontSize: "16px", color: "#333" }}>{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Recent Exams */}
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
                Recent Exams
              </h2>
              {recentExams.length === 0 ? (
                <p style={{ fontSize: "16px" }}>No exams taken yet.</p>
              ) : (
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    backgroundColor: "white",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#3867d6", color: "white" }}>
                      <th style={{ padding: "14px" }}>Exam Name</th>
                      <th style={{ padding: "14px" }}>Date</th>
                      <th style={{ padding: "14px" }}>Status</th>
                      <th style={{ padding: "14px" }}>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentExams.map((exam, index) => (
                      <tr
                        key={index}
                        style={{
                          textAlign: "center",
                          borderBottom: "1px solid #ddd",
                          fontSize: "16px",
                        }}
                      >
                        <td style={{ padding: "12px" }}>{exam.exam}</td>
                        <td style={{ padding: "12px" }}>{exam.date}</td>
                        <td style={{ padding: "12px" }}>{exam.status}</td>
                        <td style={{ padding: "12px" }}>{exam.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>

            {/* Notifications */}
            <section>
              <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
                Notifications
              </h2>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "25px",
                  backgroundColor: "white",
                  borderRadius: "14px",
                  padding: "25px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  fontSize: "16px",
                  lineHeight: "1.8",
                }}
              >
                {notifications.map((note, idx) => (
                  <li key={idx} style={{ marginBottom: "12px" }}>
                    {note}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* Profile Page */}
        {activePage === "Profile" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 60px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              maxWidth: "1000px",
              width: "100%",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
              Profile Details
            </h2>
            <p><strong>Name:</strong> Srinivas</p>
            <p><strong>Email:</strong> sirinivas@example.com</p>
            <p><strong>Role:</strong> Student</p>
            <p><strong>Joined:</strong> September 2025</p>
          </div>
        )}

        {/* Settings Page */}
        {activePage === "Settings" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 60px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              maxWidth: "1000px",
              width: "100%",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
              Settings
            </h2>
            <ul style={{ paddingLeft: "20px" }}>
              <li>Change password</li>
              <li>Update email</li>
              <li>Notification preferences</li>
            </ul>
          </div>
        )}

        {/* About Us Page */}
        {activePage === "About Us" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 60px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              maxWidth: "1000px",
              width: "100%",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
              About Us
            </h2>
            <p>
              Welcome to <strong>Online Exam Platform</strong>, your trusted digital space for
              conducting online assessments, tracking performance, and improving your learning
              journey.
            </p>
            <p>
              Our mission is to make examinations accessible, secure, and effective for students and
              institutions worldwide.
            </p>
            <p>
              📚 Features include mock tests, real-time results, performance analysis, and
              customizable exam modules.
            </p>
          </div>
        )}

        {/* Help Page */}
        {activePage === "Help" && (
          <div
            style={{
              backgroundColor: "white",
              padding: "40px 60px",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
              maxWidth: "1000px",
              width: "100%",
              margin: "0 auto",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            <h2 style={{ color: "#3867d6", marginBottom: "20px", fontSize: "24px" }}>
              Help & Support
            </h2>
            <p>If you face any issues, we’re here to help 🚀</p>
            <ul style={{ paddingLeft: "20px" }}>
              <li>📧 Email: support@onlineexam.com</li>
              <li>📞 Phone: +91-7989014047</li>
              <li>💬 Live Chat: Available 9am - 6pm IST</li>
            </ul>
            <p>
              You can also visit our <a href="#">FAQ section</a> for quick answers to common
              questions.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
