const Reducer = (state = [], action) => {
  console.log(action.payload);
  let lastId = 0;
  if (action.type === "bugAdded")
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === "bugRemoved")
    return state.filter((bug) => bug.id !== action.payload.id);
  else return state;
};

export default Reducer;
