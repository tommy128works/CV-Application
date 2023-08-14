function GeneralInformationDisplay({ generalInformation }) {
  return (
    <div>
      <div className="name-title underline">{generalInformation.fullName}</div>

      <div className="underline">
        {generalInformation.email} ❖ {generalInformation.phoneNumber} ❖{" "}
        {generalInformation.cityState}
      </div>
    </div>
  );
}

export default GeneralInformationDisplay;
