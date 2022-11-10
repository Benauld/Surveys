import React from "react";

const renderError = (error, touched) => {
  if (touched && error) {
    return <div className="red-text">{error}</div>;
  }
};

export default renderError;
