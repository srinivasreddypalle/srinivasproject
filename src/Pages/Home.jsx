import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      
      {/* Hero Section with Background Image */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          backgroundImage: "url('/images/online-exam.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        ></div>

        {/* Hero Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to Online Exam</h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 30px" }}>
            Take your exams securely, get instant results, and track your progress — all in one place.
          </p>
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#3867d6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
            onClick={() => (window.location.href = "/dashboard")}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#274c9c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3867d6")}
          >
            Go to Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>Why Choose Us?</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "30px" }}>
          {[
            { title: "Secure Exams", desc: "Conducted in a highly secure environment with proctoring." },
            { title: "Instant Results", desc: "Get graded instantly with detailed feedback." },
            { title: "Easy Access", desc: "Take exams anytime, anywhere on any device." },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                flex: "1 1 300px",
                textAlign: "center",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <h3 style={{ color: "#3867d6", marginBottom: "15px" }}>{feature.title}</h3>
              <p style={{ color: "#555" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2d3436", color: "white", textAlign: "center", padding: "20px", marginTop: "40px" }}>
        <p>© {new Date().getFullYear()} Online Exam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
