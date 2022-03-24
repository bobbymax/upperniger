import React from "react";

const CustomCardBody = ({
  children,
  additionalClasses = "",
  ...otherProps
}) => {
  return (
    <div className={`card-body ${additionalClasses}`} {...otherProps}>
      {children}
    </div>
  );
};

export default CustomCardBody;
