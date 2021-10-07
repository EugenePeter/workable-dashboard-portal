import { createContext, useState } from "react";

export const ProtectedRoutesContext = createContext<any | null>(null);
export const ProtectedRoutesActions = createContext<any | null>(null);

export interface data {
  value: string;
  name?: string;
  secondary_name?: string;
}
interface AddVacanciesActions {
  handleLogin: (data: data) => void;
  handleLogout: (data: data) => void;
}

const ProtectedRoutesProvider: React.FC<any> = (props) => {
  const { children } = props;

  const token = localStorage.getItem("token");
  const [isAuthenticated, setAuthenticated] = useState(Boolean(token));
  const [company_id, setCompanyId] = useState(localStorage.getItem("company_id"));

  const actionsProp: AddVacanciesActions = {
    handleLogin: (e: any) => {
      e.preventDefault();
      setAuthenticated(true);
    },

    handleLogout: (e: any) => {
      e.preventDefault();
      setAuthenticated(false);
    },
  };
  return (
    <>
      <ProtectedRoutesContext.Provider value={{ isAuthenticated, company_id }}>
        <ProtectedRoutesActions.Provider value={{ actionsProp, setAuthenticated, setCompanyId }}>
          {children}
        </ProtectedRoutesActions.Provider>
      </ProtectedRoutesContext.Provider>
    </>
  );
  // return <ProtectedRoutesContext.Provider value={{ isAuthenticated, actionsProp, setAuthenticated }}>{children}</ProtectedRoutesContext.Provider>;
};

export default ProtectedRoutesProvider;
