import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import { Routes, Route, NavLink  } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <ThemeProvider>
      <>
      {/* TODO: use navbar component */}
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ThemeToggle />
      </>
    </ThemeProvider>
  );
}

export default App;
