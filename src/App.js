import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      setStyle({ backgroundColor: "#333333", color: "white" });
      document.body.style.backgroundColor = "#333333";
      setModeText("Disable Dark Mode");
    } else {
      setMode("light");
      setStyle({ backgroundColor: "white", color: "black" });
      document.body.style.backgroundColor = "white";
      setModeText("Enable Dark Mode");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          modeText={modeText}
          changeMode={changeMode}
        />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm heading="Enter the Text to Analyse" myStyle={style} showAlert={showAlert}/>
              }
            />
            <Route path="/about" element={<About myStyle={style} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
