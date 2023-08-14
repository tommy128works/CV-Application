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
    let degree = document.getElementById("degree").value;
    let school = document.getElementById("school").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let startDate = document.getElementById("start_date").value;
    let endDate = document.getElementById("end_date").value;

    setEducationalExperience({
      school: school,
      degree: degree,
      city: city,
      country: country,
      startDate: startDate,
      endDate: endDate,
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
        <label htmlFor="school">School: </label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="Enter School / University Name"
        ></input>

        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field of Study"
        ></input>

        <label htmlFor="city_state">City and State: </label>
        <input
          type="text"
          id="city_state"
          name="city_state"
          placeholder="City, ST"
        ></input>

        <div>
          <label htmlFor="graduation_date">Start Date: </label>
          <input
            type="date"
            id="graduation_date"
            name="graduation_date"
          ></input>
        </div>

        <label htmlFor="point_1">Additional Information: </label>
        <input
          type="text"
          id="point_1"
          name="point_1"
          placeholder="Point #1"
        ></input>
        <input
          type="text"
          id="point_2"
          name="point_2"
          placeholder="Point #2"
        ></input>
        <input
          type="text"
          id="point_3"
          name="point_3"
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
