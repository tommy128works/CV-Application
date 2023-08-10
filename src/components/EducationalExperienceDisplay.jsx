function EducationalExperienceDisplay({educationalExperience}) {

  return (
    <>
      <h1>EDUCATION</h1>

      <div>
        <span>{educationalExperience.school}</span>
        <span>{educationalExperience.startDate} - {educationalExperience.endDate}</span>
      </div>

      <div>
        <span>{educationalExperience.degree}</span>
        <span>{educationalExperience.city} , {educationalExperience.country}</span>
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
    </>
  );
}

export default EducationalExperienceDisplay;
