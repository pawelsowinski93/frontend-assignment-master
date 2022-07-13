import React, { createContext, useReducer } from "react";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initialState";

export const AppContext = createContext(null);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
