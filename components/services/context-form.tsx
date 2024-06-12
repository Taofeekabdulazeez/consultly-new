import { ReactNode, createContext, useContext } from "react";

const FormContext = createContext({});

function FormControlProvider({ children }: { children: ReactNode }) {
  return <FormContext.Provider value={{}}>children</FormContext.Provider>;
}

function useFormControl() {
  const context = useContext(FormContext);

  if (!context) throw new Error("FormContext used out of FormControlProvider!");

  return context;
}

export { FormControlProvider, useFormControl };
