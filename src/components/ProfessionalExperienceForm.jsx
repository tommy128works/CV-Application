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
        <label htmlFor="job_title">Job Title: </label>
        <input
          type="text"
          id="job_title"
          name="job_title"
          placeholder="Enter Job Title"
        ></input>

        <label htmlFor="company">Company: </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter Company"
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

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Job Responsibilities"
        ></input>
      </form>
    </div>
  );
}

export default ProfessionalExperienceForm;
