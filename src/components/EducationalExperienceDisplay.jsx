function EducationalExperienceDisplay({ educationalExperience }) {
  return (
    <div>
      <div className="section-heading underline">EDUCATION</div>

      <div className="left-right-line slight-bold">
        <span className="left">{educationalExperience.school}</span>
        <span className="right">{educationalExperience.graduationDate}</span>
      </div>

      <div className="left-right-line italic">
        <span className="left">{educationalExperience.degree}</span>
        <span className="right">{educationalExperience.cityState}</span>
      </div>

      <div>
        <ul>
          <li>{educationalExperience.point1}</li>
          <li>{educationalExperience.point2}</li>
          <li>{educationalExperience.point3}</li>
        </ul>
      </div>
    </div>
  );
}

export default EducationalExperienceDisplay;
