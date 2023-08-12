import "../styles/CVForms.css";
import GeneralInformationForm from "./GeneralInformationForm.jsx";
import EducationalExperienceForm from "./EducationalExperienceForm.jsx";
import ProfessionalExperienceForm from "./ProfessionalExperienceForm.jsx";

function CVForms({ setGeneralInformation, setEducationalExperience }) {
  return (
    <div>
      <GeneralInformationForm setGeneralInformation={setGeneralInformation} />
      <EducationalExperienceForm
        setEducationalExperience={setEducationalExperience}
      />
      <ProfessionalExperienceForm />
    </div>
  );
}

export default CVForms;
