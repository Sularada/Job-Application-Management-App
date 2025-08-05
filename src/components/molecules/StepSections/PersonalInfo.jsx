import CustomInput from "../CustomInput/CustomInput";

const PersonalInfo = () => {
  return (
    <div className="row g-3">
      <CustomInput
        label="Fullname"
        name="personal.fullname"
        type="text"
        placeholder="Please enter your fullname"
        className="col-md-6"
      />
      <CustomInput
        label="Email"
        name="personal.email"
        type="email"
        placeholder="Please enter your email"
        className="col-md-6"
      />
      <CustomInput
        label="Phone Number"
        name="personal.phone"
        type="tel"
        placeholder="Please enter your phone number"
        className="col-md-6"
      />
      <CustomInput
        label="Birth Date"
        name="personal.birthDate"
        type="date"
        className="col-md-6"
      />
      <CustomInput
        label="Address"
        name="personal.address"
        type="textarea"
        placeholder="Please enter your address"
        className="col-12"
      />
    </div>
  );
};

export default PersonalInfo;
