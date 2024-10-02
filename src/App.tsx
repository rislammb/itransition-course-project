import Appbar from "./components/appbar";
import { Container } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector("html");
    htmlElement?.setAttribute("data-bs-theme", darkMode ? "light" : "dark");
  };

  return (
    <div className={`App ${darkMode ? "theme-dark" : "theme-light"}`}>
      <Appbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container>
        <h1>Hello world!</h1>
      </Container>
    </div>
  );
}

export default App;
