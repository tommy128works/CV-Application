import "../styles/CVForms.css";
import GeneralInformationForm from "./GeneralInformationForm.jsx";
import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm.jsx";

function CVForms({ setGeneralInformation }) {
  return (
    <div>
      <GeneralInformationForm setGeneralInformation={setGeneralInformation} />
      <EducationalExperienceForm />
      <ProfessionalExperienceForm />
    </div>
  );
}

export default CVForms;
