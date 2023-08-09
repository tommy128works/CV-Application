import expandMore from "../assets/expand_more.svg";
import expandLess from "../assets/expand_less.svg";

function GeneralInformationForm() {
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

  return (
    <>
      <div>
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

        <label htmlFor="city_province">City and province: </label>
        <input
          type="text"
          id="city_province"
          name="city_province"
          placeholder="City, Province"
        ></input>
      </form>
    </>
  );
}

export default GeneralInformationForm;
