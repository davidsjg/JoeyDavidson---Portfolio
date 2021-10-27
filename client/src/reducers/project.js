const initialState = { project: [{ title: "ah yeah brah" }], currProject: {} };

const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PROJECT":
      return {
        ...state,
        project: payload,
      };
    case "SET_CURR_PROJECT":
      return {
        ...state,
        currProject: payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
