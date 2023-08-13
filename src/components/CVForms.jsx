import "../styles/CVForms.css";
import GeneralInformationForm from "./GeneralInformationForm.jsx";
import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm.jsx";

function CVForms({ setGeneralInformation, setEducationalExperience }) {
  return (
    <div>
      <GeneralInformationForm setGeneralInformation={setGeneralInformation} />
      <ProfessionalExperienceForm />
      <EducationalExperienceForm
        setEducationalExperience={setEducationalExperience}
      />
    </div>
  );
}

export default CVForms;
