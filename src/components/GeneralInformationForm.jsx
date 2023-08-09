import "../styles/GeneralInformationForm.css";

function GeneralInformationForm() {
  // create form
  // create dropdown feature

  return (
    <>
      <form className="form-container">
        <label htmlFor="full_name">Full Name: </label>
        <input type="text" id="full_name" name="full_name" placeholder="Enter your full name"></input>

        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" placeholder="Email"></input>

        <label htmlFor="phone_number">Phone Number: </label>
        <input type="text" id="phone_number" name="phone_number" placeholder="Phone number"></input>

        <label htmlFor="city_province">City and province: </label>
        <input type="text" id="city_province" name="city_province" placeholder="City, Province"></input>
      </form>
    </>
  );
}

export default GeneralInformationForm;
