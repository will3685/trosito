export type AlertType = "success" | "error";

export type DashboardContextType = {
  isOpenSnackBar: boolean;
  setIsOpenSnackBar: (newValue: boolean) => void;
  messages: string[];
  setMessages: (newValue: string[]) => void;
  existsErrors: boolean;
  setExistsErrors: (newValue: boolean) => void;
  typeAlert: AlertType;
  setTypeAlert: (newValue: AlertType) => void;
  isOpenBackdrop: boolean;
  setIsOpenBackdrop: (newValue: boolean) => void;
};
