import { useState } from "react";
import "./App.css";
import CVForms from "./components/CVForms.jsx";
import CVDisplay from "./components/CVDisplay.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: "John Smith",
    email: "email@gmail.com",
    phoneNumber: "(555) 555-5555",
    cityState: "San Francisco, CA",
  });

  const [professionalExperience, setProfessionalExperience] = useState({
    company: "Company Name",
    jobTitle: "Job Title",
    cityState: "City, ST",
    startDate: "Month, Year",
    endDate: "Month, Year",
    responsibility1: "Core responsibility #1",
    responsibility2: "Core responsibility #2",
    responsibility3: "Core responsibility #3",
  });

  const [educationalExperience, setEducationalExperience] = useState({
    degree: null,
    school: null,
    city: null,
    country: null,
    startDate: null,
    endDate: null,
  });

  return (
    <>
      <div id="content-container">
        <CVForms
          setGeneralInformation={setGeneralInformation}
          setEducationalExperience={setEducationalExperience}
        />
        <CVDisplay
          generalInformation={generalInformation}
          professionalExperience={professionalExperience}
          educationalExperience={educationalExperience}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
