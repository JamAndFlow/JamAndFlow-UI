import React, { useContext } from "react";
import "../styles/background.css";
import ThemeContext from "../context/ThemeContext";

const Background = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app-background${theme === "dark" ? " dark" : ""}`}>
      {children}
    </div>
  );
};

export default Background;
