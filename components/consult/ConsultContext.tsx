"use client";

import { ReactNode, createContext, useContext, useReducer } from "react";

type Action = {
  type: any;
};

type State = {
  status: "service" | "time" | "details";
};

const initialState = {
  status: "service",
  step: 1,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "prev":
      return {
        ...state,
        step: state.step == 1 ? state.step : state.step - 1,
      };
    case "next":
      return {
        ...state,
        step: state.step === 4 ? state.step : state.step + 1,
      };
  }
}

const ConsultContext = createContext({} as any);

function ConsultProvider({ children }: { children: ReactNode }) {
  const [{ step }, dispatch] = useReducer(reducer, initialState);

  return (
    <ConsultContext.Provider value={{ step, dispatch }}>
      {children}
    </ConsultContext.Provider>
  );
}

function useConsult() {
  const context = useContext(ConsultContext);

  if (!context)
    throw new Error("ConsultContext is used outside Consult Provider");

  return context;
}

export { ConsultProvider, useConsult };
