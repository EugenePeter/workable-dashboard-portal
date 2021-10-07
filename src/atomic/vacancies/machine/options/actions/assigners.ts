/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign } from "xstate";
import { IContext } from "../../types";

const actions: ActionFunctionMap<IContext, any> = {
  assignResultsToContext: assign({
    application_data: ({ application_data }, { payload }) => {
      return {
        ...application_data,
        vacancies: [...application_data.vacancies, ...payload],
      };
    },
  }),
};

export default actions;
