import { useState } from "react";
import "./App.css";
import GeneralInformationForm from "./components/GeneralInformationForm.jsx";
import EducationalExperienceForm from "./components/EducationalExperienceForm.jsx";

function App() {
  return (
    <>
      <GeneralInformationForm />
      <EducationalExperienceForm />
    </>
  );
}

export default App;
