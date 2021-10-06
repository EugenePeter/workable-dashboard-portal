import { useContext } from "react";
import { AddVacanciesContext } from "../../AddVacanciesProvider";
import styled from "styled-components";
const Summary = () => {
  const add_vacancies_context = useContext(AddVacanciesContext);
  // const { context, state } = add_vacancies_context;

  // const { application_config = {}, application_data = {} } = context ?? {};
  // const { steps = {} } = application_config ?? {};
  // const { step_one, step_two, step_three, step_four, step_five, step_six } = steps ?? {};
  // const { field_value = {} } = application_data ?? {};

  console.log("add_vacancies_context", add_vacancies_context);
  // console.log("CURRENT STATE CONTEXT", context);
  return <div>{/* <h4>summary</h4> */}</div>;
};

export default Summary;

export const StyledSummary = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
  flex-basis: 0;
`;
