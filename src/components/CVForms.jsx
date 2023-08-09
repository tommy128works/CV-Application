import "../styles/CVForms.css";
import GeneralInformationForm from "./GeneralInformationForm.jsx";
import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm.jsx";

function CVForms() {
  // add each form section
  // dummy content for now
  // add props later
  // probably receive props here then destructure
  // pass only necessary data to each section

  return (
    <div>
      <GeneralInformationForm />
      <EducationalExperienceForm />
      <ProfessionalExperienceForm />
    </div>
  );
}

export default CVForms;
