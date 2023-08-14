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
          <li>
            List your honors like summa cum laude or Economics Honors Society;
            3.X/4.0 GPA (list only if GPA is over 3.3)
          </li>
          <li>
            Studied abroad in City, Country during spring/fall 20YY semester
            (University Name)
          </li>
          <li>
            Any other fun stuff like varsity sports, fraternity/sorority, or
            something that gives you a little color
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EducationalExperienceDisplay;
