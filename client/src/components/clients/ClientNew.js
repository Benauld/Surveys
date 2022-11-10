import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createClient, clearError } from "../../actions";

import renderInput from "../formHelpers/renderInput";
import renderDropdownList from "../formHelpers/renderDropdownList";

class ClientNew extends Component {
  renderServerError() {
    if (this.props.errors !== "") {
      return <div className="red-text">{this.props.errors.data.error}</div>;
    }
  }

  onSubmit = (formValues) => {
    this.props.clearError();
    this.props.createClient(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="container col s12"
      >
        <div>
          <Field
            name="title"
            label="Titel"
            defaultValue="Herr"
            data={[
              "Herr",
              "Frau",
              "Doktor",
              "Profesor",
              "Profesorin",
              "Fraulein",
            ]}
            component={renderDropdownList}
          />
        </div>
        <Field
          name="forname"
          type="text"
          component={renderInput}
          label="Vorname"
        />
        <Field
          name="surname"
          type="text"
          component={renderInput}
          label="Nachname"
        />
        <Field
          name="email"
          component={renderInput}
          label="Email"
          type="email"
        />
        <Field name="mobile" component={renderInput} label="Handy" />
        <button className="btn waves-effect waves-light">
          Submit
          <i className="material-icons right">send</i>
        </button>
        <div>{this.renderServerError()}</div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.forname) {
    errors.forname = "You must enter a forname";
  }
  if (!formValues.surname) {
    errors.surname = "You must enter a surname";
  }
  if (!formValues.email) {
    errors.email = "You must enter an email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!formValues.mobile) {
    errors.mobile = "You must enter a mobile number";
  }

  return errors;
};

//const asyncValidate = (formValues, dispatch) => {
//  const errors = {};
//  if (formValues.email) {
//    errors.email = "You must enter an email";
//  }
//
//  return errors;
//};
const formWrapped = reduxForm({
  form: "createClient",
  validate,
})(ClientNew);

function mapStateToProps({ auth, clients, errors }) {
  return { auth, clients, errors };
}
export default connect(mapStateToProps, { createClient, clearError })(
  formWrapped
);
