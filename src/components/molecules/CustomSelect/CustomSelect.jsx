import { useField } from "formik";
import "./style.scss";

// eslint-disable-next-line react/prop-types
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <label className="me-3 form-label">{label}</label>
        <select
          {...field}
          {...props}
          className={`${
            meta.error ? "input-error" : ""
          } rounded-3 border-1 border-secondary px-3 py-2 form-select`}
        />
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
