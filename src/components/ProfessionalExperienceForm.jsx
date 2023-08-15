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
    let startMonth = document.getElementById("professional_start_month").value;
    let startYear = document.getElementById("professional_start_year").value;
    let endMonth = document.getElementById("professional_end_month").value;
    let endYear = document.getElementById("professional_end_year").value;
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
      startDate: startMonth + ", " + startYear,
      endDate: endMonth + ", " + endYear,
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
            <label htmlFor="professional_start_month">Start Date:</label>

            <div>
              <select
                id="professional_start_month"
                name="professional_start_month"
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>

              <input
                type="number"
                min="0"
                max="9999"
                step="1"
                placeholder="2023"
                id="professional_start_year"
                name="professional_start_year"
              ></input>
            </div>
          </div>

          <div>
            <label htmlFor="professional_end_month">End Date:</label>

            <div>
              <select
                id="professional_end_month"
                name="professional_end_month"
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>

              <input
                type="number"
                min="0"
                max="9999"
                step="1"
                placeholder="2023"
                id="professional_end_year"
                name="professional_end_year"
              ></input>
            </div>
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
