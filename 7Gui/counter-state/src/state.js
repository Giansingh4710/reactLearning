export const initialState = {
  count: 0,
  increment: 1,
};

export const actions = {
  addCount: {
    type: "ADD_COUNT",
  },
  subtractCount: {
    type: "SUB_COUNT",
  },
  setIncrement: (num) => {
    return {
      type: "SET_INCRE",
      changeBy: num,
    };
  },
};

export const reducer = (state, action) => {
  if (action.type === "ADD_COUNT") {
    return {
      ...state,
      count: parseInt(state.count) + parseInt(state.increment),
    };
  }
  if (action.type === "SUB_COUNT") {
    return {
      ...state,
      count: state.count - state.increment,
    };
  }
  if (action.type === "SET_INCRE") {
    return {
      ...state,
      increment: action.changeBy,
    };
  }
};
