const initialState = { project: "PROJECT 1 BROH", count: 0 };

const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PROJECT":
      return {
        ...state,
        project: payload,
      };

    default:
      return state;
  }
};

export default projectReducer;
