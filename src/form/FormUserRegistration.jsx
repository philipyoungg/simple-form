import React from "react";
import { Field, reduxForm } from "redux-form";
import FixedButton from "../component/FixedButton";
import renderInput from "../component/RenderInput";

let FormUserRegistration = ({ valid }) => {
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
};

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

export default reduxForm({
  form: "userRegistration",
  validate
})(FormUserRegistration);
