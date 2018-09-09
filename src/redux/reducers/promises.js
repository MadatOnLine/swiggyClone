const initialState = {
  IN_PROGRESS: 0,
  FAILED: 0
};

export default (state = initialState, action) => {
  let action_string = String(action.type).split("_");
  let type = action_string[action_string.length - 1];

  switch (type) {
    case "SUCCESSFUL":
      return Object.assign({}, state, {
        IN_PROGRESS: state.IN_PROGRESS - 1
      });
    case "FAILED":
      return Object.assign({}, state, {
        FAILED: state.FAILED + 1,
        IN_PROGRESS: state.IN_PROGRESS - 1
      });

    case "REQUEST":
      return Object.assign({}, state, {
        IN_PROGRESS: state.IN_PROGRESS + 1
      });

    default:
      return state;
  }
};
