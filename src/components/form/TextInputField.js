import React from "react";

const TextInputField = ({
  label = "",
  type = "text",
  value = "",
  onChange = undefined,
  placeholder = "",
  required = false,
  multiline = 0,
  error = false,
  errorMessage = null,
  additionalClasses = "",
  disabled = false,
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {multiline === 0 ? (
        <input
          className={`form-control ${additionalClasses}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      ) : (
        <textarea
          className="form-control"
          rows={multiline}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        ></textarea>
      )}
    </div>
  );
};

export default TextInputField;
