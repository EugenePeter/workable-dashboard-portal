import { useContext } from "react";
import { Container } from "./styles";
import { VacanciesContext, VacanciesActions } from "./VacanciesProvider";
import { Modifiers } from "../../global-styles";
import { CleverTable } from "./components";

const VacanciesConsumer = () => {
  const vacancies_context = useContext(VacanciesContext);
  const vacancies_actions = useContext(VacanciesActions);
  const {} = vacancies_context;
  const { actionsProp } = vacancies_actions;

  const {} = actionsProp;

  return (
    <>
      <Modifiers />
      <Container className="add-vacancy_container">
        <CleverTable />
      </Container>
    </>
  );
};

export default VacanciesConsumer;
