import React from "react";
import { Field, reduxForm } from "redux-form";
import FixedButton from "./FixedButton";
import { fontSizePrimary, textColorSecondary } from "./variable";

const validate = values => {
  const defaultErrMessage = "input is required";
  const errors = {};
  if (!values.firstName) errors.firstName = defaultErrMessage;
  if (!values.lastName) errors.lastName = defaultErrMessage;
  if (!values.phone) {
    errors.phone = defaultErrMessage;
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "please enter number";
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
      borderRadius: "4px",
      marginBottom: "21px",
      overflow: "inherit",
      padding: "0 12px",
      height: "54px",
      position: "relative"
    }}
  >
    <input
      {...input}
      type={type}
      style={{
        position: "relative",
        marginTop: "4px",
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
        transform: dirty
          ? "scale(0.75) translateY(-10px)"
          : active ? "scale(0.75) translateY(-10px)" : ""
      }}
    >
      {label}
    </p>
    {touched &&
      error &&
      <span
        style={{
          position: "absolute",
          top: "56px",
          left: 0,
          color: "red",
          fontSize: 11
        }}
      >
        {error}
      </span>}
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
          label="Address"
        />
      <FixedButton valid={valid} />
      </form>
    );
  }
}

export default reduxForm({
  form: "userRegistration",
  validate
})(FormUserRegistration);
