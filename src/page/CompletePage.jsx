import React from "react";
import Header from "../component/Header";
import Steps from "../component/Steps";
const Complete = ({match}) => (
  <div>
    <Steps match={match}/>
    <Header title="Complete" center />
  </div>
);

export default Complete;
