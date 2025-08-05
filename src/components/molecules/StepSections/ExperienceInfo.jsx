import CustomInput from "../CustomInput/CustomInput";

const ExperienceInfo = () => {
  return (
    <div className="row g-3">
      <CustomInput
        label="Experience Year"
        name="experience.years"
        type="number"
        placeholder="Please enter experience year"
        className="col-md-6"
      />
      <CustomInput
        label="Current Company"
        name="experience.currentCompany"
        type="text"
        placeholder="Please enter current company"
        className="col-md-6"
      />
      <CustomInput
        label="Position"
        name="experience.position"
        type="text"
        placeholder="Please enter position"
        className="col-12"
      />
    </div>
  );
};

export default ExperienceInfo;
