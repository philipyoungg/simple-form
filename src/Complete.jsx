import React from "react";
import Header from "./Header";
import Steps from "./Steps";
const Complete = ({match}) => (
  <div>
    <Steps match={match}/>
    <Header title="Complete" center />
  </div>
);

export default Complete;
