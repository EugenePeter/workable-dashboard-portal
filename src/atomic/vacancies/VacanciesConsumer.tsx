import { useContext } from "react";

import { Container } from "./styles";

import { VacanciesContext, VacanciesActions } from "./VacanciesProvider";

import { Modifiers } from "../../global-styles";

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
        <h1>VACANCIES GOES HERE</h1>
      </Container>
    </>
  );
};

export default VacanciesConsumer;
