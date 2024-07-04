"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

type Action = {
  type: "prev" | "next";
};

type State = {
  status: "service" | "time" | "details";
  step: number;
};

const initialState: State = {
  status: "service",
  step: 1,
};

function reducer(state: State, action: Action): State {
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
    default:
      return state;
  }
}

const ConsultContext = createContext({} as any);

function ConsultProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: any;
}) {
  console.log(user);
  const [{ step, status }, dispatch] = useReducer(reducer, initialState);
  const [selectedService, setSelectedService] = useState(user.services[0]);
  const [selectedDate, setSelectedDate] = useState();

  const handleSelectService = (value: string) => {
    setSelectedService(() =>
      user.services.find((service: any) => service.title === value)
    );
  };

  return (
    <ConsultContext.Provider
      value={{
        step,
        dispatch,
        status,
        user,
        selectedService,
        handleSelectService,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </ConsultContext.Provider>
  );
}

function useConsultState() {
  const context = useContext(ConsultContext);

  if (!context)
    throw new Error("ConsultContext is used outside Consult Provider");

  return context;
}

function useConsultUser() {
  const context = useContext(ConsultContext);

  if (!context)
    throw new Error("ConsultContext is used outside Consult Provider");

  return context?.user;
}

export { ConsultProvider, useConsultState, useConsultUser };
