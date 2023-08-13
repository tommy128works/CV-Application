import { useState } from "react";
import "./App.css";
import CVForms from "./components/CVForms.jsx";
import CVDisplay from "./components/CVDisplay.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: null,
    email: null,
    phoneNumber: null,
    cityProvince: null,
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
          educationalExperience={educationalExperience}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
