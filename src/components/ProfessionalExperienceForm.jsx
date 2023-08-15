import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";
import work from "../assets/work.svg";

function ProfessionalExperienceForm({ setProfessionalExperience }) {
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

  const submitProfessionalExperience = () => {
    let company = document.getElementById("professional_company").value;
    let jobTitle = document.getElementById("professional_job_title").value;
    let cityState = document.getElementById("professional_city_state").value;
    console.log(cityState);
    let startDate = document.getElementById("professional_start_date").value;
    let endDate = document.getElementById("professional_end_date").value;
    let responsibility1 = document.getElementById(
      "professional_responsibility_1"
    ).value;
    let responsibility2 = document.getElementById(
      "professional_responsibility_2"
    ).value;
    let responsibility3 = document.getElementById(
      "professional_responsibility_3"
    ).value;

    setProfessionalExperience({
      company: company,
      jobTitle: jobTitle,
      cityState: cityState,
      startDate: startDate,
      endDate: endDate,
      responsibility1: responsibility1,
      responsibility2: responsibility2,
      responsibility3: responsibility3,
    });
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
        <label htmlFor="professional_company">Company: </label>
        <input
          type="text"
          id="professional_company"
          name="professional_company"
          placeholder="Enter Company"
        ></input>

        <label htmlFor="professional_job_title">Job Title: </label>
        <input
          type="text"
          id="professional_job_title"
          name="professional_job_title"
          placeholder="Enter Job Title"
        ></input>

        <label htmlFor="professional_city_state">City and State: </label>
        <input
          type="text"
          id="professional_city_state"
          name="professional_city_state"
          placeholder="City, ST"
        ></input>

        <div className="dates-container">
          <div>
            <label htmlFor="professional_start_date">Start Date: </label>
            <input
              type="date"
              id="professional_start_date"
              name="professional_start_date"
            ></input>
          </div>

          <div>
            <label htmlFor="professional_end_date">End Date: </label>
            <input
              type="date"
              id="professional_end_date"
              name="professional_end_date"
            ></input>
          </div>
        </div>

        <label htmlFor="professional_responsibility_1">
          Core Responsibilities:{" "}
        </label>
        <input
          type="text"
          id="professional_responsibility_1"
          name="professional_responsibility_1"
          placeholder="Responsibility #1"
        ></input>
        <input
          type="text"
          id="professional_responsibility_2"
          name="professional_responsibility_2"
          placeholder="Responsibility #2"
        ></input>
        <input
          type="text"
          id="professional_responsibility_3"
          name="professional_responsibility_3"
          placeholder="Responsibility #3"
        ></input>

        <div className="buttons-container">
          <button
            type="button"
            onClick={submitProfessionalExperience}
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfessionalExperienceForm;
