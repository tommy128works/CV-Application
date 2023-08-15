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
    school: "University Name",
    degree: "Degree (e.g. BS), Majors (e.g. Computer Science)",
    cityState: "City, ST",
    graduationDate: "Graduation Month, Year",
    point1:
      "List your honors like summa cum laude or Economics Honors Society; 3.X/4.0 GPA (list only if GPA is over 3.3)",
    point2:
      "Studied abroad in City, Country during spring/fall 20YY semester (University Name)",
    point3:
      "Any other fun stuff like varsity sports, fraternity/sorority, or something that gives you a little color",
  });

  return (
    <>
      <div id="content-container">
        <CVForms
          setGeneralInformation={setGeneralInformation}
          setEducationalExperience={setEducationalExperience}
          setProfessionalExperience={setProfessionalExperience}
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
