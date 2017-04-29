import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import FixedButton from "./FixedButton";
import Header from "./Header";
import Steps from "./Steps";
import {global, text, input} from "./variable";

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

const InputWrapper = styled.div`
background: ${input.color.background};
width: auto;
maxWidth: 100%;
border: 1px solid;
borderColor: ${global.color.disabled};
borderRadius: 4px;
marginBottom: 21px;
overflow: inherit;
padding: 0 ${global.size.padding};
height: ${global.size.touchable};
position: relative;
`;

const Input = styled.input`
position: relative;
padding: 0;
marginTop: 4px;
fontSize: ${text.size.primary};
line-height: ${global.size.touchable};
marginBottom: 0;
background: transparent;
border: none;
width: 100%;
height: 100%;
`;

const FloatingLabel = styled.p`
top: 0;
position: absolute;
lineHeight: ${global.size.touchable};
transition: 0.3s ease-in-out;
transformOrigin: left 0;
color: ${text.color.secondary};
pointerEvents: none;
transform: ${props => (props.dirty ? "scale(0.75) translateY(-10px)" : props.active ? "scale(0.75) translateY(-10px)" : "")}
`;

const InputError = styled.p`
position: absolute;
top: 57px;
color: red;
fontSize: ${text.size.secondary};
`;

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, dirty, active }
}) => (
  <InputWrapper>
    <Input {...input} type={type} />
    <FloatingLabel dirty={dirty} active={active}>{label}</FloatingLabel>
    {touched && error && <InputError>{error}</InputError>}
  </InputWrapper>
);

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
