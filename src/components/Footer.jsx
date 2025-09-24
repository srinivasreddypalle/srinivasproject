import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Online Exam. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/exams">Exams</a>
        <a href="/results">Results</a>
      </div>
    </footer>
  );
}
