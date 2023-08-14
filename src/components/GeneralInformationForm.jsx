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
    let fullName = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone_number").value;
    let cityState = document.getElementById("city_state").value;

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
        <label htmlFor="full_name">Full Name: </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter your full name"
        ></input>

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" placeholder="Email"></input>

        <label htmlFor="phone_number">Phone Number: </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Phone number"
        ></input>

        <label htmlFor="city_state">City and State: </label>
        <input
          type="text"
          id="city_state"
          name="city_state"
          placeholder="City, State"
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
