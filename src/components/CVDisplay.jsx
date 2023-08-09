import "../styles/CVDisplay.css";
import GeneralInformationDisplay from "./GeneralInformationDisplay.jsx";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay.jsx";
import ProfessionalExperienceDisplay from "./ProfessionalExperienceDisplay.jsx";

function CVDisplay({ generalInformation }) {
  return (
    <div id="CV-container">
      <GeneralInformationDisplay generalInformation={generalInformation} />
      <ProfessionalExperienceDisplay />
      <EducationalExperienceDisplay />
    </div>
  );
}

export default CVDisplay;
