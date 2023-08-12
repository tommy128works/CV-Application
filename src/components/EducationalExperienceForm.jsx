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
      degree: degree,
      school: school,
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
        <label htmlFor="degree">Degree: </label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field of Study"
        ></input>

        <label htmlFor="school">School: </label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="Enter school / university"
        ></input>

        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter City"
        ></input>

        <label htmlFor="country">Country: </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="Enter Country"
        ></input>

        <div className="dates-container">
          <div>
            <label htmlFor="start_date">Start Date: </label>
            <input type="date" id="start_date" name="start_date"></input>
          </div>

          <div>
            <label htmlFor="end_date">End Date: </label>
            <input type="date" id="end_date" name="end_date"></input>
          </div>
        </div>

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
