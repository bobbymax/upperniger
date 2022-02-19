import React from "react";

const CustomSelect = ({
  label = "",
  value = "",
  onChange = undefined,
  children,
  error = false,
  errorMessage = null,
  additionalClasses = "",
  name = "",
}) => {
  return (
    <>
      <div className="form-group">
        <label className="form-label">{label}</label>
        <select
          className="form-select btn-square digits"
          value={value}
          onChange={onChange}
          name={name}
        >
          {children}
        </select>
      </div>
    </>
  );
};

export default CustomSelect;
