import React from "react";
import renderError from "./renderError";

const renderInput = ({ input, label, meta: { error, touched }, type }) => {
  return (
    <div className="field col s3 m3 l6">
      <label>{label}</label>
      <input {...input} autoComplete="on" type={type} />
      {renderError(error, touched)}
    </div>
  );
};

export default renderInput;
