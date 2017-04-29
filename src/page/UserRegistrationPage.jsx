import React from "react";
import { Field, reduxForm } from "redux-form";
import FixedButton from "../component/FixedButton";
import Header from "../component/Header";
import renderInput from "../component/RenderInput";

const validate = values => {
  const defaultErrMessage = "This field cannot be empty";
  const errors = {};
  if (!values.firstName) errors.firstName = defaultErrMessage;
  if (!values.lastName) errors.lastName = defaultErrMessage;
  if (!values.phone) {
    errors.phone = defaultErrMessage;
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "This field needs number";
  }
  if (!values.address) errors.address = defaultErrMessage;
  return errors;
};

class FormUserRegistration extends React.Component {
  render() {
    const { valid } = this.props;
    return (
      <form>
        <Field
          name="firstName"
          component={renderInput}
          type="text"
          label="Your First Name"
        />
        <Field
          name="lastName"
          component={renderInput}
          type="text"
          label="Your Last Name"
        />
        <Field
          name="phone"
          component={renderInput}
          type="tel"
          label="Contact Number"
        />
        <Field
          name="address"
          component={renderInput}
          type="textarea"
          label="Address"
        />
        <FixedButton valid={valid} to="/3" />
      </form>
    );
  }
}

FormUserRegistration = reduxForm({
  form: "userRegistration",
  validate
})(FormUserRegistration);

const UserRegistrationPage = ({ handleNextPage, match }) => (
  <div>
    <Header
      title="Your contact information"
      description="Fill in the following details"
    />
    <FormUserRegistration />
  </div>
);

export default UserRegistrationPage;
