import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import activeStep from './activeStep';

export default combineReducers({
  activeStep,
  form: formReducer,
});
