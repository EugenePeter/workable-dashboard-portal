/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign } from "xstate";
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

  assignFieldValueWithObjectDataToContext: assign({
    application_data: ({ application_data }: any, { payload = {} }) => {
      const { value = "", name = "", secondary_name = "" } = payload;
      const details = application_data.field_value[name];
      console.log("assignTextAreaValueToContext", details);
      console.log("YOO PAYLOAD:", payload);
      return {
        ...application_data,
        field_value: {
          ...application_data.field_value,
          [name]: {
            ...details,
            [secondary_name]: value,
          },
        },
      };
    },
  }),

  assignFieldValueWithKeywordsArrayToContext: assign({
    application_data: ({ application_data }: any, { payload = {} }) => {
      const { value = "", name, secondary_name, accessor } = payload;
      const details = application_data.field_value[name];
      const keywords = secondary_name ? value : null;
      console.log("assignTextAreaValueToContext", details);
      console.log("YOO PAYLOAD:", payload);

      console.log("NAME PRIMARY", name);
      console.log("NAME SECONDARY", secondary_name);
      console.log("NAME KEYWORDS", keywords);

      if (name && !secondary_name) {
        return {
          ...application_data,
          field_value: {
            ...application_data.field_value,
            [name]: {
              ...details,
              [accessor]: value,
            },
          },
        };
      }
      if (secondary_name) {
        return {
          ...application_data,
          field_value: {
            ...application_data.field_value,
            [name]: {
              ...details,
              // [name]: value,
              [secondary_name]: [...details[secondary_name], keywords && keywords],
            },
          },
        };
      }
    },
  }),
  assignTextAreaValueToContext: assign({
    application_data: ({ application_data }: any, { payload = {} }) => {
      const { value = "", name = "" } = payload;
      const details = application_data.field_value[name];
      console.log("assignTextAreaValueToContext", details);
      return {
        ...application_data,
        field_value: {
          ...application_data.field_value,
          [name]: {
            ...details,
            [name]: value,
          },
        },
      };
    },
  }),
};

export default actions;
