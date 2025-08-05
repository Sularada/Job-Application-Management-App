import { useField } from "formik";
import "./style.scss";
const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="d-flex align-items-center gap-3">
        <label htmlFor="" className="form-label m-0 me-3">
          {label}
        </label>

        <input
          {...field}
          {...props}
          className={`${
            meta.error ? "input-error" : ""
          } rounded-3 border-1 border-secondary px-3 py-2 form-input`}
        />
      </div>

      {meta.error && <div className="error mb-0 w-100">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
