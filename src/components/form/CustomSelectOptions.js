import React from "react";

const CustomSelectOptions = ({ value = "", label, disabled = false }) => {
  return (
    <option value={value} disabled={disabled}>
      {label}
    </option>
  );
};

export default CustomSelectOptions;
