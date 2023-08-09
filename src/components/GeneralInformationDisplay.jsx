function GeneralInformationDisplay({ generalInformation }) {
  return (
    <>
      <h1>{generalInformation.fullName}</h1>

      <div>
        <span>{generalInformation.email}</span>
        <span>{generalInformation.phoneNumber}</span>
        <span>{generalInformation.cityProvince}</span>
      </div>
    </>
  );
}

export default GeneralInformationDisplay;
