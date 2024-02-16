import React, { useReducer } from "react";
import { render } from "react-dom";
import { reducer, initialState, actions } from "./state.js";

function MyApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <h1>{state.num}</h1>
      <input
        type="number"
        onChange={(event) => {
          const entry = event.currentTarget.value;
          dispatch(actions.increment(parseFloat(entry)));
        }}
      />
      <button
        onClick={() => {
          dispatch(actions.up);
        }}
      >
        UP
      </button>
      <button
        onClick={function bob() {
          dispatch(actions.down);
        }}
      >
        DOWN
      </button>
    </main>
  );
}

render(<MyApp />, document.getElementById("root"));
