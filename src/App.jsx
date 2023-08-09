import { useState } from "react";
import "./App.css";
import GeneralInformationForm from "./components/GeneralInformationForm.jsx";
import EducationalExperienceForm from "./components/EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm.jsx";
import CVDisplay from "./components/CVDisplay.jsx";

function App() {
  return (
    <>
      <GeneralInformationForm />
      <EducationalExperienceForm />
      <ProfessionalExperienceForm />
      <CVDisplay />
    </>
  );
}

export default App;
