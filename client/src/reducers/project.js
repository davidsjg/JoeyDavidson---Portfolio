const initialState = [{ project: "PROJECT 1 BROH" }, { count: 0 }];

const projectReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PROJECT":
      return state + 1;

    default:
      return state;
  }
};

export default projectReducer;
