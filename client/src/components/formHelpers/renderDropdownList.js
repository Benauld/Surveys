import React from "react";
import renderError from "./renderError";
import DropdownList from "react-widgets/DropdownList";

const renderDropdownList = ({
  input,
  label,
  meta: { error, touched },
  defaultValue,
  data,
}) => {
  return (
    <div className="col s3 m3 l6">
      <label>{label}</label>
      <DropdownList
        {...input}
        defaultValue={defaultValue}
        data={data}
        onBlur={() => {
          input.onBlur(input.value);
        }}
      />
      {renderError(error, touched)}
    </div>
  );
};

export default renderDropdownList;
