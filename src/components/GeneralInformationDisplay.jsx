function GeneralInformationDisplay({ generalInformation }) {
  return (
    <>
      <div className="section-heading underline">{generalInformation.fullName}</div>

      <div className="underline">
        {generalInformation.email} ❖ {generalInformation.phoneNumber} ❖{" "}
        {generalInformation.cityState}
      </div>
    </>
  );
}

export default GeneralInformationDisplay;
