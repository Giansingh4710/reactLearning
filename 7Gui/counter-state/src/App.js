import React from "react";
import { initialState, actions, reducer } from "./state";
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <input
        type="number"
        value={state.increment}
        onChange={(event) => {
          dispatch(actions.setIncrement(event.target.value));
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(actions.subtractCount);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(actions.addCount);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
