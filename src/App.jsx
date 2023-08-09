import { useState } from "react";
import "./App.css";
import CVForms from "./components/CVForms.jsx";
import CVDisplay from "./components/CVDisplay.jsx";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: null,
    email: null,
    phoneNumber: null,
    cityProvince: null,
  });

  return (
    <>
      <CVForms setGeneralInformation={setGeneralInformation} />
      <CVDisplay generalInformation={generalInformation} />
    </>
  );
}

export default App;
