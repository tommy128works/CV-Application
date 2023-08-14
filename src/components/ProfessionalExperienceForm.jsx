import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";
import work from "../assets/work.svg";

function ProfessionalExperienceForm() {
  const toggleDropdown = () => {
    let content = document.getElementById("professional-experience-form");
    content.classList.toggle("show");

    let icon = document.getElementById("professional-experience-toggle-icon");

    if (content.classList.contains("show")) {
      icon.src = expandLess;
    } else {
      icon.src = expandMore;
    }
  };

  return (
    <div className="form-container">
      <div className="center-items-vertically">
        <img src={work} alt="work icon" />

        <span className="section-title">Professional Experience</span>
        <img
          id="professional-experience-toggle-icon"
          src={expandMore}
          alt="toggle drop down"
          onClick={toggleDropdown}
          className="dropbtn"
        />
      </div>

      <form id="professional-experience-form" className="dropdown-content">
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter Company"
        ></input>

        <label htmlFor="job_title">Job Title: </label>
        <input
          type="text"
          id="job_title"
          name="job_title"
          placeholder="Enter Job Title"
        ></input>

        <label htmlFor="city_state">City and State: </label>
        <input
          type="text"
          id="city_state"
          name="city_state"
          placeholder="City, ST"
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

        <label htmlFor="responsibility_1">Core Responsibilities: </label>
        <input
          type="text"
          id="responsibility_1"
          name="responsibility_1"
          placeholder="Responsibility #1"
        ></input>
        <input
          type="text"
          id="responsibility_2"
          name="responsibility_2"
          placeholder="Responsibility #2"
        ></input>
        <input
          type="text"
          id="responsibility_3"
          name="responsibility_3"
          placeholder="Responsibility #3"
        ></input>
      </form>
    </div>
  );
}

export default ProfessionalExperienceForm;
