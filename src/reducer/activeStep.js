const activeStep = (state = 1, action) => ({
  ACTIVE_STEP_CHANGED: action.payload,
}[action.type] || state);

export default activeStep;
