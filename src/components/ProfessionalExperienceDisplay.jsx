function ProfessionalExperienceDisplay({ professionalExperience }) {
  return (
    <div>
      <div className="section-heading underline">WORK EXPERIENCE</div>

      <div className="left-right-line slight-bold">
        <span className="left">{professionalExperience.company}</span>
        <span className="right">
          {professionalExperience.startDate} - {professionalExperience.endDate}
        </span>
      </div>

      <div className="left-right-line italic">
        <span className="left">Job Title</span>
        <span className="right">City, State</span>
      </div>

      <div>
        <ul>
          <li>{professionalExperience.responsibility1} </li>
          <li>{professionalExperience.responsibility2} </li>
          <li>{professionalExperience.responsibility3} </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfessionalExperienceDisplay;
