import "../styles/CVForms.css";
import GeneralInformationForm from "./GeneralInformationForm.jsx";
import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm.jsx";

function CVForms({
  setGeneralInformation,
  setProfessionalExperience,
  setEducationalExperience,
}) {
  return (
    <div>
      <GeneralInformationForm setGeneralInformation={setGeneralInformation} />
      <ProfessionalExperienceForm
        setProfessionalExperience={setProfessionalExperience}
      />
      <EducationalExperienceForm
        setEducationalExperience={setEducationalExperience}
      />
    </div>
  );
}

export default CVForms;
