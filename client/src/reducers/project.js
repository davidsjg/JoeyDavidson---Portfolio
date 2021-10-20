const projectReducer = (state = "New Project", action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "SET_PROJECT":
      return { ...state, project: payload };

    default:
      return state;
  }
};

export default projectReducer;
