import { useContext, useEffect } from "react";

import {
  Container,
  Header,
  Body,
  LeftPanel,
  MainPanel,
  Wrapper,
  BottomToolbar,
  VacanciesFormWrapper,
  Button,
  Columns,
} from "./styles";

import { AddVacanciesContext } from "./AddVacanciesProvider";
import { RecordContext } from "../../applications/record-dashboard/RecordProvider";
import { StepsIndicator } from "../../global-components/index";
import { AddVacanciesForm } from "./components";

import { Modifiers } from "../../global-styles";

const AddVacancies = () => {
  const add_vacancies_context = useContext(AddVacanciesContext);
  const { setDisplayRightSideBar } = useContext(RecordContext);
  const { state, actionsProp } = add_vacancies_context;

  const { handleNextStep, handlePrevStep } = actionsProp;

  useEffect(() => {
    setDisplayRightSideBar(true);
    return () => setDisplayRightSideBar(false);
  }, [setDisplayRightSideBar]);

  return (
    <>
      <Modifiers />
      <Container className="add-vacancy_container">
        <Wrapper className="add-vacancy_wrapper">
          <Header className="add-vacancy_header"></Header>
          <Body className="add-vacancy_body">
            <LeftPanel className="add-vacancy_left-panel margin--right">
              <StepsIndicator />
            </LeftPanel>
            <MainPanel className="add-vacancy_main-panel">
              <VacanciesFormWrapper className="margin--right">
                <AddVacanciesForm state={state} />
              </VacanciesFormWrapper>
            </MainPanel>
          </Body>
          <BottomToolbar className="add-vacancy_bottom-toolbar">
            <Columns></Columns>
            <Columns>
              {/* <Button btn_color="cancel">Cancel</Button> */}
              {!state.matches("ready.submit") && !state.matches("ready.step_one") && (
                <Button btn_color="back" onClick={handlePrevStep} className="margin__spacer">
                  Back
                </Button>
              )}
              {!state.matches("ready.submit") && !state.matches("ready.step_six") && (
                <Button btn_color="next" onClick={handleNextStep} className="margin--right">
                  Next
                </Button>
              )}
              {state.matches("ready.step_six") && (
                <Button btn_color="next" onClick={handleNextStep} className="margin--right">
                  SUBMIT
                </Button>
              )}
            </Columns>
          </BottomToolbar>
        </Wrapper>
      </Container>
    </>
  );
};

export default AddVacancies;
