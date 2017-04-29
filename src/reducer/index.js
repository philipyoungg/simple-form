import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducers = {
  form: formReducer,
};
const reducer = combineReducers(reducers);

export default reducer;
