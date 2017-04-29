import React from "react";
import styled from "styled-components";

import { global, text, input } from "../variable";

const InputWrapper = styled.div`
background: ${input.color.background};
width: auto;
maxWidth: 100%;
border: 1px solid;
borderColor: ${global.color.disabled};
border-radius: ${global.size.borderRadius};
marginBottom: 21px;
overflow: inherit;
padding: 0 ${global.size.padding};
height: ${props => (props.type === "textarea" ? "auto" : global.size.touchable)};
position: relative;
`;

const Input = styled.input`
position: relative;
padding: 0;
marginTop: 4px;
fontSize: ${text.size.primary};
marginBottom: 0;
background: transparent;
border: none;
width: 100%;
height: 100%;
`;

const Textarea = styled.textarea`
position: relative;
padding: 0;
width: 100%;
marginTop: ${global.size.margin};
fontSize: ${text.size.primary};
line-height: 1.3;
marginBottom: 0;
background: transparent;
border: none;
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
top: ${props => (props.type === "textarea" ? "137px" : "57px")};
color: red;
fontSize: ${text.size.secondary};
`;

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, dirty, active }
}) => (
  <InputWrapper type={type}>
    {type === "textarea"
      ? <Textarea {...input} rows="6" />
      : <Input {...input} type={type} />}
    <FloatingLabel dirty={dirty} active={active}>{label}</FloatingLabel>
    {touched && error && <InputError type={type}>{error}</InputError>}
  </InputWrapper>
);

export default renderInput;
