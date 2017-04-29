import React from "react";
import Header from "../component/Header";
import FormUserRegistration from "../form/FormUserRegistration";

const UserRegistrationPage = () => (
  <div>
    <Header
      title="Your contact information"
      description="Fill in the following details"
    />
    <FormUserRegistration />
  </div>
);

export default UserRegistrationPage;
