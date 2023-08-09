import { useState } from "react";
import "./App.css";
import GeneralInformationForm from "./components/GeneralInformationForm.jsx";
import EducationalExperienceForm from "./components/EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm.jsx";

function App() {
  return (
    <>
      <GeneralInformationForm />
      <EducationalExperienceForm />
      <ProfessionalExperienceForm />
    </>
  );
}

export default App;
