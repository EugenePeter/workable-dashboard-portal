/* eslint-disable indent */
import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import { GraphQLClient } from "graphql-request";
import { ADD_VACANCIES } from "../../gql";

// authorization: `Basic ${encodeBase64(`${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`)}`,

const graphql = new GraphQLClient("https://workable-add-vacancies.herokuapp.com/graphql", {
  headers: {},
});

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  submit: (context) => async (send: any) => {
    const { application_data, company_id } = context;
    const { field_value } = application_data;
    console.log("VACANCIES SUMISSION", field_value);
    try {
      const { result } = await graphql.request(ADD_VACANCIES, {
        params: {
          ...field_value,
          company_id,
        },
      });
      console.log("VACANCIES SUMISSION RESULT", result);
      // return {
      //   ...data[0],
      //   success,
      // };
      if (result.success)
        send({
          type: "SUCCESS",
          payload: result,
        });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
      send({
        type: "ERROR",
      });
      process.exit(1);
      // throw error;
    }
  },
};

export default services;
