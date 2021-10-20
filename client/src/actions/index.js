export const setProject = (data) => {
  console.log(data);

  return {
    type: "SET_PROJECT",
    payload: data,
  };
};

//tyring to send 5 over as payload
