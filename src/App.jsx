import { useState } from "react";
import "./App.css";
import CVForms from "./components/CVForms.jsx";
import CVDisplay from "./components/CVDisplay.jsx";

function App() {
  return (
    <>
      <CVForms />
      <CVDisplay />
    </>
  );
}

export default App;
