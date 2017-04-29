import React from "react";
import { connect } from "react-redux";
import { textColorPrimary, colorPrimary, colorDisabled } from "./variable";
import { NavLink } from "react-router-dom";

const RegistrationLink = ({ to, label, match, state }) => {
  var currentState = match.url.replace("/", "");
  var isFinished = currentState >= state;
  return (
    <div className="fl w-third bg-white pv3 black-70 link">
      <NavLink
        to={to}
        activeStyle={{ color: colorPrimary }}
        style={{
          color: isFinished ? textColorPrimary : colorDisabled,
          pointerEvents: "none",
          textDecoration: "none"
        }}
      >
        {label}
      </NavLink>
    </div>
  );
};

const Steps = ({ match }) => (
  <div style={{ paddingBottom: 30 }}>
    <div className="cf tc">
      <RegistrationLink to="/1" label="Step 1" state="1" match={match} />
      <RegistrationLink to="/2" label="Step 2" state="2" match={match} />
      <RegistrationLink to="/3" label="Step 3" state="3" match={match} />
    </div>
  </div>
);

export default connect(state => ({ activeState: state.activeState }))(Steps);
