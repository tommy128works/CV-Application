import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";
import person from "../assets/person.svg";

function GeneralInformationForm({ setGeneralInformation }) {
  const toggleDropdown = () => {
    let content = document.getElementById("general-information-form");
    content.classList.toggle("show");

    let icon = document.getElementById("general-information-toggle-icon");

    if (content.classList.contains("show")) {
      icon.src = expandLess;
    } else {
      icon.src = expandMore;
    }
  };

  const submitGeneralInformation = () => {
    let fullName = document.getElementById("general_full_name").value;
    let email = document.getElementById("general_email").value;
    let phoneNumber = document.getElementById("general_phone_number").value;
    let cityState = document.getElementById("general_city_state").value;

    setGeneralInformation({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      cityState: cityState,
    });
  };

  return (
    <div className="form-container">
      <div className="center-items-vertically">
        <img src={person} alt="person icon" />

        <span className="section-title">General Information</span>

        <img
          id="general-information-toggle-icon"
          src={expandMore}
          alt="toggle drop down"
          onClick={toggleDropdown}
          className="dropbtn"
        />
      </div>

      <form id="general-information-form" className="dropdown-content">
        <label htmlFor="general_full_name">Full Name: </label>
        <input
          type="text"
          id="general_full_name"
          name="general_full_name"
          placeholder="Enter your full name"
        ></input>

        <label htmlFor="general_email">Email: </label>
        <input
          type="text"
          id="general_email"
          name="general_email"
          placeholder="Email"
        ></input>

        <label htmlFor="general_phone_number">Phone Number: </label>
        <input
          type="text"
          id="general_phone_number"
          name="general_phone_number"
          placeholder="Phone number"
        ></input>

        <label htmlFor="general_city_state">City and State: </label>
        <input
          type="text"
          id="general_city_state"
          name="general_city_state"
          placeholder="City, ST"
        ></input>

        <div className="buttons-container">
          <button
            type="button"
            onClick={submitGeneralInformation}
            className="submit-btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralInformationForm;
