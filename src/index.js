import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createStore, combineReducers } from "redux";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

// const activeState = (state = "2", action) => {
//   return (
//     {
//       ["ACTIVE_STATE_CHANGED"]: action.payload
//     }[action.type] || state
//   );
// };
const reducers = {
  // activeState,
  form: formReducer
};
const reducer = combineReducers(reducers);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
