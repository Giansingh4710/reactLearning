export const initialState = {
  list: [],
  prefix: "",
  name: "",
  surname: "",
  indexToChange: 0,
  buttonDisabled: "disabled",
};

export const actions = {
  setButton: (prop) => {
    return { type: "BUTTONDISABLED", on: prop };
  },
  setIndex: (ind) => {
    return {
      type: "INDEX",
      theIndex: ind,
    };
  },
  setPrefix: (name) => {
    return { type: "SETPREFIX", thePrefix: name };
  },
  setName: (name) => {
    return { type: "SETNAME", theName: name };
  },
  setSurname: (name) => {
    return { type: "SETSURNAME", theSurname: name };
  },
  addToLst: (name) => {
    return { type: "ADD", newName: name };
  },
  update: (index, neew) => {
    return {
      type: "UPDATE",
      theIndex: index,
      newName: neew,
    };
  },
  delete: (ind) => {
    return {
      type: "DELETE",
      remove: ind,
    };
  },
};

export const reducer = (state, action) => {
  if (action.type === "BUTTONDISABLED") {
    return {
      ...state,
      buttonDisabled: action.on,
    };
  }
  if (action.type === "INDEX") {
    return {
      ...state,
      indexToChange: action.theIndex,
    };
  }
  if (action.type === "SETPREFIX") {
    return {
      ...state,
      prefix: action.thePrefix,
    };
  }
  if (action.type === "SETNAME") {
    return {
      ...state,
      name: action.theName,
    };
  }
  if (action.type === "SETSURNAME") {
    return {
      ...state,
      surname: action.theSurname,
    };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      list: [...state.list, action.newName],
    };
  }
  if (action.type === "UPDATE") {
    state.list[action.theIndex] = action.newName;
    return {
      ...state,
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      list: state.list.filter(
        (item) => state.list.indexOf(item) !== action.remove
      ),
    };
  }
};
