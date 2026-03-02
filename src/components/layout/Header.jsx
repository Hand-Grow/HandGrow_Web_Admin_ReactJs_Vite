"use client";

import Link from "next/link";
import Button from "../common/Button";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: theme === "light" ? "#f8f9fa" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    borderBottom: "1px solid #dee2e6",
  };

  const navStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: theme === "light" ? "#007bff" : "#66b0ff",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        HandGrow
      </div>

      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/about" style={linkStyle}>About</Link>
      </nav>

      <Button onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
    </header>
  );
};

export default Header;