import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";
import school from "../assets/school.svg";

function EducationalExperienceForm({ setEducationalExperience }) {
  const toggleDropdown = () => {
    let content = document.getElementById("educational-experience-form");
    content.classList.toggle("show");

    let icon = document.getElementById("educational-experience-toggle-icon");

    if (content.classList.contains("show")) {
      icon.src = expandLess;
    } else {
      icon.src = expandMore;
    }
  };

  const submitEducationalExperience = () => {
    let school = document.getElementById("educational_school").value;
    let degree = document.getElementById("educational_degree").value;
    let cityState = document.getElementById("educational_city_state").value;
    let graduationDate = document.getElementById(
      "educational_graduation_date"
    ).value;
    let point1 = document.getElementById("educational_point_1").value;
    let point2 = document.getElementById("educational_point_2").value;
    let point3 = document.getElementById("educational_point_3").value;

    setEducationalExperience({
      school: school,
      degree: degree,
      cityState: cityState,
      graduationDate: graduationDate,
      point1: point1,
      point2: point2,
      point3: point3,
    });
  };

  return (
    <div className="form-container">
      <div className="center-items-vertically">
        <img src={school} alt="education icon" />

        <span className="section-title">Educational Experience</span>
        <img
          onClick={toggleDropdown}
          id="educational-experience-toggle-icon"
          src={expandMore}
          alt="toggle drop down"
          className="dropbtn"
        />
      </div>

      <form id="educational-experience-form" className="dropdown-content">
        <label htmlFor="educational_school">School: </label>
        <input
          type="text"
          id="educational_school"
          name="educational_school"
          placeholder="Enter School / University Name"
        ></input>

        <label htmlFor="educational_degree">Degree: </label>
        <input
          type="text"
          id="educational_degree"
          name="educational_degree"
          placeholder="Enter Degree / Field of Study"
        ></input>

        <label htmlFor="educational_city_state">City and State: </label>
        <input
          type="text"
          id="educational_city_state"
          name="educational_city_state"
          placeholder="City, ST"
        ></input>

        <div>
          <label htmlFor="educational_graduation_date">Graduation Date: </label>
          <input
            type="date"
            id="educational_graduation_date"
            name="educational_graduation_date"
          ></input>
        </div>

        <label htmlFor="educational_point_1">Additional Information: </label>
        <input
          type="text"
          id="educational_point_1"
          name="educational_point_1"
          placeholder="Point #1"
        ></input>
        <input
          type="text"
          id="educational_point_2"
          name="educational_point_2"
          placeholder="Point #2"
        ></input>
        <input
          type="text"
          id="educational_point_3"
          name="educational_point_3"
          placeholder="Point #3"
        ></input>

        <div className="buttons-container">
          <button
            type="button"
            onClick={submitEducationalExperience}
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationalExperienceForm;
