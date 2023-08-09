import "../styles/formSection.css";
import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";

function EducationalExperienceForm() {
  const toggleDropdown = () => {
    let content = document.getElementById("educational-experience-form");
    content.classList.toggle("show");

    let icon = document.getElementById("toggle-icon");

    if (content.classList.contains("show")) {
      icon.src = expandLess;
    } else {
      icon.src = expandMore;
    }
  };

  return (
    <>
      <div>
        <span className="section-title">Educational Experience</span>
        <button onClick={toggleDropdown} className="dropbtn">
          <img id="toggle-icon" src={expandMore} alt="toggle drop down" />
        </button>
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

        <label htmlFor="start_date">Start Date: </label>
        <input type="date" id="start_date" name="start_date"></input>

        <label htmlFor="end_date">End Date: </label>
        <input type="date" id="end_date" name="end_date"></input>
      </form>
    </>
  );
}

export default EducationalExperienceForm;
