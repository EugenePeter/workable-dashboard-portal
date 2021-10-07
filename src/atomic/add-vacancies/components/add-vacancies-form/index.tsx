import { useContext } from "react";

import { StepOne, StepThree, StepTwo, StepFour, StepFive, StepSix } from "../steps";

import { AddVacanciesContext } from "../../AddVacanciesProvider";

interface IAddVacanciesForm {
  state: any;
}
const AddVacanciesForm: React.FC<IAddVacanciesForm> = () => {
  const add_vacancies_context = useContext(AddVacanciesContext);
  const { context, state_value, state, actionsProp } = add_vacancies_context;

  const { application_config = {}, application_data = {} } = context ?? {};
  const { steps = {} } = application_config ?? {};
  const { step_one, step_two, step_three, step_four, step_five, step_six } = steps ?? {};
  const { field_value = {} } = application_data ?? {};

  console.log("CURRENT STATE VALUE", state.value);
  console.log("CURRENT STATE CONTEXT", context);

  return (
    <>
      {state.matches("ready.step_one") && (
        <>
          <StepOne
            inputs={step_one}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
            orientation="vertical"
          />
        </>
      )}
      {state.matches("ready.step_two") && (
        <>
          <StepTwo
            inputs={step_two}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
          />
        </>
      )}
      {state.matches("ready.step_three") && (
        <>
          <StepThree
            inputs={step_three}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
          />
        </>
      )}
      {state.matches("ready.step_four") && (
        <>
          <StepFour
            inputs={step_four}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
          />
        </>
      )}
      {state.matches("ready.step_five") && (
        <>
          <StepFive
            inputs={step_five}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
          />
        </>
      )}
      {state.matches("ready.step_six") && (
        <>
          <StepSix
            inputs={step_six}
            actions={actionsProp}
            field_value={field_value}
            current_step={state_value}
          />
        </>
      )}
      {state.matches("ready.submit") && (
        <>
          <h1>SUBMIT</h1>
        </>
      )}
    </>
  );
};

export default AddVacanciesForm;
