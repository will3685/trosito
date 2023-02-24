import { createContext, ReactNode, useState } from "react";
import { AlertType, DashboardContextType } from "./dashboardContextProtocol";

interface DashboardContextProps {
  children: ReactNode;
}

export const DashboardContext = createContext<DashboardContextType>(
  {} as DashboardContextType
);

export const DashboardContextProvider = ({
  children,
}: DashboardContextProps) => {
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
  const [isOpenBackdrop, setIsOpenBackdrop] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([""]);
  const [typeAlert, setTypeAlert] = useState<AlertType>("success");
  const [existsErrors, setExistsErrors] = useState<boolean>(false);
  return (
    <DashboardContext.Provider
      value={{
        isOpenSnackBar,
        setIsOpenSnackBar,
        messages,
        setMessages,
        typeAlert,
        setTypeAlert,
        existsErrors,
        setExistsErrors,
        isOpenBackdrop,
        setIsOpenBackdrop,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
