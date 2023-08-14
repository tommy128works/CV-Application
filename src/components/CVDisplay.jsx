import "../styles/CVDisplay.css";
import GeneralInformationDisplay from "./GeneralInformationDisplay.jsx";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay.jsx";
import ProfessionalExperienceDisplay from "./ProfessionalExperienceDisplay.jsx";

function CVDisplay({
  generalInformation,
  professionalExperience,
  educationalExperience,
}) {
  return (
    <div id="CV-container">
      <GeneralInformationDisplay generalInformation={generalInformation} />
      <ProfessionalExperienceDisplay
        professionalExperience={professionalExperience}
      />
      <EducationalExperienceDisplay
        educationalExperience={educationalExperience}
      />
    </div>
  );
}

export default CVDisplay;
