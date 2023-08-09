import "../styles/CVDisplay.css"
import GeneralInformationDisplay from "./GeneralInformationDisplay.jsx";
import EducationalExperienceDisplay from "./EducationalExperienceDisplay.jsx";
import ProfessionalExperienceDisplay from "./ProfessionalExperienceDisplay.jsx";


function CVDisplay() {
  // add each form section
  // dummy content for now
  // add props later
  // probably receive props here then destructure
  // pass only necessary data to each section

  return (
    <div>
      <GeneralInformationDisplay />
      <ProfessionalExperienceDisplay />
      <EducationalExperienceDisplay />
    </div>
  );
}

export default CVDisplay;
