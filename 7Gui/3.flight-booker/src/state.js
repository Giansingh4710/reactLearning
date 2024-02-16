import { format } from "date-fns";

const today = format(new Date(), "MM.dd.yyyy");

export const initialState = {
  flightType: "one-way flight",
  leave: today,
  returnDate: today,
  disableReturnFlight: "disable",
  disableButton: "",
  makeLeaveFlightRed: "",
  makeReturnFlightRed: "",
};

export const actions = {
  flightType: (flType) => {
    return {
      type: "FLIGHT_TYPE",
      theFlightType: flType,
    };
  },
  leaveFlightDate: (date) => {
    return {
      type: "LEAVE_FLIGHT_DATE",
      theDate: date,
    };
  },
  returnFlightDate: (date) => {
    return {
      type: "RETURN_FLIGHT_DATE",
      theDate: date,
    };
  },
  disableReturnFlight: { type: "DISABLE_RETURN_FLIGHT" },
  enableReturnFlight: { type: "ENABLE_RETURN_FLIGHT" },

  disableButton: { type: "DISABLE_BUTTON" },
  enableButton: { type: "ENABLE_BUTTON" },

  leaveFlightRed: { type: "LEAVE_FLIGHT_RED" },
  leaveFlightNotRed: { type: "LEAVE_FLIGHT_NOT_RED" },
  returnFlightRed: { type: "RETURN_FLIGHT_RED" },
  returnFlightNotRed: { type: "RETURN_FLIGHT_NOT_RED" },
};

export const reducer = (state, action) => {
  if (action.type === "FLIGHT_TYPE") {
    return {
      ...state,
      flightType: action.theFlightType,
    };
  }
  if (action.type === "LEAVE_FLIGHT_DATE") {
    return {
      ...state,
      leave: action.theDate,
    };
  }
  if (action.type === "RETURN_FLIGHT_DATE") {
    return {
      ...state,
      returnDate: action.theDate,
    };
  }
  if (action.type === "DISABLE_RETURN_FLIGHT") {
    return {
      ...state,
      disableReturnFlight: "disable",
    };
  }
  if (action.type === "ENABLE_RETURN_FLIGHT") {
    return {
      ...state,
      disableReturnFlight: "",
    };
  }
  if (action.type === "DISABLE_BUTTON") {
    return {
      ...state,
      disableButton: "disable",
    };
  }
  if (action.type === "ENABLE_BUTTON") {
    return {
      ...state,
      disableButton: "",
    };
  }
  if (action.type === "LEAVE_FLIGHT_RED") {
    return {
      ...state,
      makeLeaveFlightRed: "active",
    };
  }
  if (action.type === "LEAVE_FLIGHT_NOT_RED") {
    return {
      ...state,
      makeLeaveFlightRed: "",
    };
  }
  if (action.type === "RETURN_FLIGHT_RED") {
    return {
      ...state,
      makeReturnFlightRed: "active",
    };
  }
  if (action.type === "RETURN_FLIGHT_NOT_RED") {
    return {
      ...state,
      makeReturnFlightRed: "",
    };
  }
};
