export const initialState = {
  num: 0,
  increaseBy: 1,
};

export const actions = {
  up: { type: "UP" },
  down: { type: "DOWN" },
  increment: (num) => {
    return {
      type: "INCREMENT",
      by: num,
    };
  },
};

export function reducer(state, action) {
  if (action.type === "UP") {
    return {
      ...state,
      num: state.num + state.increaseBy,
    };
  }
  if (action.type === "DOWN") {
    return {
      ...state,
      num: state.num - state.increaseBy,
    };
  }
  if (action.type === "INCREMENT") {
    return {
      ...state,
      increaseBy: action.by,
    };
  }
}
