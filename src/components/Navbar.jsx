import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Online Exam</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/exams">Exams</Link>
            <Link to="/results">Results</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
