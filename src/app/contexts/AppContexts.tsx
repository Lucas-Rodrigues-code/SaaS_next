"use client"
import {
  
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { Tenant } from "../types/Tenant";

type appContextType = {
  tenant: Tenant | null;
  setTenant: (newTenant: Tenant) => void;
};
const defaultValues: appContextType = {
  tenant: null,
  setTenant: () => null,
};

const appContext = createContext<appContextType>(defaultValues);

export function useAppContext() {
  return useContext(appContext);
}

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  return (
    <appContext.Provider value={{ tenant, setTenant }}>
      {children}
    </appContext.Provider>
  );
}
