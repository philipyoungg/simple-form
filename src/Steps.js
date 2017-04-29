import React from "react";
import { connect } from "react-redux";
import { colorPrimary } from "./variable";
import { NavLink } from "react-router-dom";
const Steps = () => (
  <div style={{paddingBottom: 30}}>
    <div className="cf tc">
      <div className="fl w-third bg-white pv3 black-70">
        <NavLink to="/1" activeStyle={{color: colorPrimary}}>Step 1</NavLink>
      </div>
      <div className="fl w-third bg-white pv3 black-70">
        <NavLink to="/2" activeStyle={{color: colorPrimary}}>Step 2</NavLink>
      </div>
      <div className="fl w-third bg-white pv3 black-70">
        <NavLink to="/3" activeStyle={{color: colorPrimary}}>Step 3</NavLink>
      </div>
    </div>
  </div>
);

export default connect(state => ({ activeState: state.activeState }))(Steps);
