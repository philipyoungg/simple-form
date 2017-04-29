import React from "react";
import { Field, reduxForm } from "redux-form";
import FixedButton from "./FixedButton";
import Header from "./Header";
import Steps from "./Steps";
import { fontSizePrimary, textColorSecondary } from "./variable";

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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, dirty, active }
}) => (
  <div
    style={{
      background: "#EAEFF2",
      width: "auto",
      display: "block",
      maxWidth: "100%",
      border: "1px solid",
      borderColor: "#CCD6DD",
      borderRadius: 4,
      marginBottom: 21,
      overflow: "inherit",
      padding: "0 12px",
      height: 54,
      position: "relative"
    }}
  >
    <input
      {...input}
      type={type}
      style={{
        position: "relative",
        padding: 0,
        marginTop: 4,
        fontSize: fontSizePrimary,
        marginBottom: "0",
        background: "transparent",
        border: "none",
        width: "100%",
        height: "100%"
      }}
    />
    <p
      style={{
        top: 0,
        position: "absolute",
        lineHeight: "54px",
        transition: "0.3s ease-in-out",
        transformOrigin: "left 0",
        color: textColorSecondary,
        pointerEvents: "none",
        transform: dirty
          ? "scale(0.75) translateY(-10px)"
          : active ? "scale(0.75) translateY(-10px)" : ""
      }}
    >
      {label}
    </p>
    {touched &&
      error &&
      <p
        style={{
          position: "absolute",
          top: 57,
          color: "red",
          fontSize: 11
        }}
      >
        {error}
      </p>}
  </div>
);

class FormUserRegistration extends React.Component {
  render() {
    const { valid } = this.props;
    return (
      <form>
        <Field
          name="firstName"
          component={renderField}
          type="text"
          label="Your First Name"
        />
        <Field
          name="lastName"
          component={renderField}
          type="text"
          label="Your Last Name"
        />
        <Field
          name="phone"
          component={renderField}
          type="tel"
          label="Contact Number"
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
    <Steps match={match} />
    <Header
      title="Your contact information"
      description="Fill in the following details"
    />
    <FormUserRegistration />
  </div>
);

export default UserRegistrationPage;
