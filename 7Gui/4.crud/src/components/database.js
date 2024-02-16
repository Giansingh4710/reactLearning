import React from "react";
import { initialState, actions, reducer } from "./state";
import { useReducer } from "react";
function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const style = {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flex: 1,
  };

  function buttonDisabled() {
    console.log(state.list);
    if (state.list.length === 0) {
      dispatch(actions.setButton("disabled"));
    } else {
      dispatch(actions.setButton(""));
    }
  }

  function showList() {
    if (state.prefix === "") {
      return state.list.map((name) => <option key={name}>{name}</option>);
    } else {
      //const lastNames = state.list.map((name) => name.split(", ")[1]);
      //const filtered = lastNames.filter((name) => name.includes(state.prefix));

      const filteredFullNames = [];
      for (let i = 0; i < state.list.length; i++) {
        let lastName = state.list[i].split(", ")[1];
        if (lastName.includes(state.prefix)) {
          filteredFullNames.push(state.list[i]);
        }
      }
      return filteredFullNames.map((name) => (
        <option key={name}>{name}</option>
      ));
    }
  }
  return (
    <div>
      <lable>Name:</lable>
      <input
        onChange={(event) => {
          const name = event.target.value;
          dispatch(actions.setName(name));
        }}
        value={state.name}
      ></input>

      <label>Surname:</label>
      <input
        onChange={(event) => {
          const name = event.target.value;
          dispatch(actions.setSurname(name));
        }}
        value={state.surname}
      ></input>

      <br />
      <br />
      <br />
      <br />

      <lable>Filter prefix: </lable>
      <input
        value={state.prefix}
        onChange={(event) => {
          const entry = event.target.value;
          dispatch(actions.setPrefix(entry));
        }}
      ></input>

      <select
        style={style}
        onChange={(event) => {
          const name = event.target.value;
          dispatch(actions.setIndex(state.list.indexOf(name)));
        }}
        multiple
      >
        {showList()}
      </select>
      <button
        onClick={async () => {
          if (state.name !== "" && state.surname !== "") {
            const name = state.name + ", " + state.surname;
            await dispatch(actions.addToLst(name));
          }
          buttonDisabled();
        }}
      >
        Create
      </button>
      <button
        disabled={state.buttonDisabled}
        onClick={() => {
          if (state.name !== "" && state.surname !== "") {
            const newName = state.name + ", " + state.surname;
            dispatch(actions.update(state.indexToChange, newName));
            dispatch(actions.setIndex(0));
            buttonDisabled();
          }
        }}
      >
        Update
      </button>
      <button
        disabled={state.buttonDisabled}
        onClick={() => {
          dispatch(actions.delete(state.indexToChange));
          dispatch(actions.setIndex(0));
          buttonDisabled();
          console.log(state.buttonDisabled);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Main;
