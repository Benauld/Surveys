import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createClient } from "../../actions";
import DropdownList from "react-widgets/DropdownList";

class ClientNew extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="red-text">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta, type }) => {
    return (
      <div className="field col s3 m3 l6">
        <label>{label}</label>
        <input {...input} autoComplete="on" type={type} />
        {this.renderError(meta)}
      </div>
    );
  };
  renderDropdownList = ({ label, meta, defaultValue, data }) => {
    return (
      <div className="col s3 m3 l6">
        <label>{label}</label>
        <DropdownList defaultValue={defaultValue} data={data} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
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
            component={this.renderDropdownList}
            defaultValue="Herr"
            data={[
              "Herr",
              "Frau",
              "Doktor",
              "Profesor",
              "Profesorin",
              "Fraulein",
            ]}
          />
        </div>
        <Field
          name="forname"
          type="text"
          component={this.renderInput}
          label="Vorname"
        />
        <Field
          name="surname"
          type="text"
          component={this.renderInput}
          label="Nachname"
        />
        <Field
          name="email"
          component={this.renderInput}
          label="Email"
          type="email"
        />
        <Field name="mobile" component={this.renderInput} label="Handy" />

        <button className="btn waves-effect waves-light">
          Submit
          <i className="material-icons right">send</i>
        </button>
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

const formWrapped = reduxForm({
  form: "createClient",
  validate,
})(ClientNew);

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, { createClient })(formWrapped);
