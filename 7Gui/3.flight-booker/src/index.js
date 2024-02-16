import React, { useReducer } from "react";
import { render } from "react-dom";
import { initialState, actions, reducer } from "./state";
import "./styles.css";
import { format, isBefore, isEqual } from "date-fns";

function MyApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function validDate(date) {
    const lst = date.split(".");
    if (lst.length !== 3) return false;

    for (let j = 0; j < lst.length; j++) {
      const num = lst[j];
      for (let i = 0; i < num.length; i++) {
        if (
          num[i] === "0" ||
          num[i] === "1" ||
          num[i] === "2" ||
          num[i] === "3" ||
          num[i] === "4" ||
          num[i] === "5" ||
          num[i] === "6" ||
          num[i] === "7" ||
          num[i] === "8" ||
          num[i] === "9"
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  function validDates(leave, comeBack) {
    leave = leave.split(".");
    comeBack = comeBack.split(".");

    leave = leave.map((str) => parseInt(str));
    comeBack = comeBack.map((str) => parseInt(str));
    return isBefore(
      new Date(leave[2], leave[1] - 1, leave[0]),
      new Date(comeBack[2], comeBack[1] - 1, comeBack[0])
    );
    if (comeBack[2] < leave[2]) return false;
    if (comeBack[2] > leave[2]) return true;

    if (comeBack[1] < leave[1]) return false;
    if (comeBack[1] > leave[1]) return true;

    if (comeBack[0] < leave[0]) return false;
    if (comeBack[0] > leave[0]) return true;
    return true; // if both dates are equal
  }
  return (
    <main>
      <select
        onChange={(event) => {
          const flightType = event.currentTarget.value;
          if (flightType === "one-way flight") {
            dispatch(actions.disableReturnFlight);
            dispatch(actions.flightType("one-way flight"));
          } else {
            dispatch(actions.enableReturnFlight);
            dispatch(actions.flightType("return flight"));
          }
        }}
      >
        <option>one-way flight</option>
        <option>return flight</option>
      </select>
      <div>
        <input
          value={state.leave}
          className={`description-${state.makeLeaveFlightRed}`}
          onChange={(event) => {
            const date = event.currentTarget.value;
            dispatch(actions.leaveFlightDate(date));
            if (validDate(date)) {
              dispatch(actions.leaveFlightNotRed);
              dispatch(actions.enableButton);
              if (state.flightType === "return flight") {
                dispatch(actions.enableReturnFlight);
                if (!validDates(state.leave, state.returnDate)) {
                  dispatch(actions.disableButton);
                } else {
                  dispatch(actions.enableButton);
                }
              }
            } else {
              dispatch(actions.leaveFlightRed);
              dispatch(actions.disableButton);
              dispatch(actions.disableReturnFlight);
            }
          }}
        />
      </div>
      <div>
        <input
          value={state.returnDate}
          className={`description-${state.makeReturnFlightRed}`}
          disabled={state.disableReturnFlight}
          onChange={(event) => {
            const date = event.currentTarget.value;
            dispatch(actions.returnFlightDate(date));
            if (!validDate(date)) {
              dispatch(actions.returnFlightRed);
              dispatch(actions.disableButton);
            } else {
              dispatch(actions.returnFlightNotRed);
              dispatch(actions.enableButton);
              if (!validDates(state.leave, state.returnDate)) {
                dispatch(actions.disableButton);
              } else {
                dispatch(actions.enableButton);
              }
            }
          }}
        />
      </div>
      <button disabled={state.disableButton}>BOOK</button>
    </main>
  );
}

render(<MyApp />, document.getElementById("root"));
