/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign, AnyEventObject } from "xstate";
import { IContext } from "../../types";

const actions: ActionFunctionMap<IContext, any> = {
  assignResultsToContext: assign({
    application_data: ({ application_data }, { payload }) => {
      return {
        ...application_data,
        results: payload,
      };
    },
  }),

  assignErrorstoContext: assign({
    application_data: ({ application_data }, { payload }) => {
      return {
        ...application_data,
        errors: payload,
      };
    },
  }),

  assignFieldValueToContext: assign({
    application_data: ({ application_data }, { payload }) => {
      const { value, name } = payload;
      return {
        ...application_data,
        field_value: {
          ...application_data.field_value,
          [name]: value,
        },
      };
    },
  }),
};

export default actions;
