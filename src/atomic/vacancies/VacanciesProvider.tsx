import { createContext, useContext } from "react";
import { spawn, useClever } from "./machine/";
import { data } from "./types";

import { ProtectedRoutesContext } from "../../protected-routes/ProtectedRoutesProvider";

export const VacanciesContext = createContext<any | null>(null);
export const VacanciesActions = createContext<any | null>(null);
interface AddVacanciesActions {
  handleChange: (data: data) => void;
  handleNextStep: (data: data) => void;
  handlePrevStep: (data: data) => void;
}

const VacanciesProvider: React.FC<any> = (props) => {
  const { children } = props;
  const { company_id } = useContext(ProtectedRoutesContext);
  const machine = spawn({ company_id });
  const [context, state_value, state, send] = useClever(machine);

  console.log("VACANCIES CONTEXT:", context);

  const actionsProp: AddVacanciesActions = {
    handleChange: (data: data) => {
      console.log("DATAAAAA:", data);
      send({
        type: "ON_FIELD_UPDATE",
        payload: data,
      });
    },
    handleNextStep: () => {
      send({
        type: "NEXT",
      });
    },
    handlePrevStep: () => {
      send({
        type: "BACK",
      });
    },
  };

  return (
    <VacanciesContext.Provider value={{ context, state_value, state }}>
      <VacanciesActions.Provider value={{ send, actionsProp }}>{children}</VacanciesActions.Provider>
    </VacanciesContext.Provider>
  );
};

export default VacanciesProvider;
