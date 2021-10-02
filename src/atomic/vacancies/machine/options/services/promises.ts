import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import { GraphQLClient } from "graphql-request";
import { GET_VACANCIES } from "../../gql";

const { GET_VACANCIES_API_ENDPOINT = "http://localhost:6060/graphql" } = process.env;

const graphql = new GraphQLClient(GET_VACANCIES_API_ENDPOINT, {
  headers: {},
});

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  submit: (context) => async (send: any) => {
    const { company_id = "" } = context ?? {};
    try {
      const { result } = await graphql.request(GET_VACANCIES, {
        params: company_id,
      });
      console.log("VACANCIES FOUND", result);
      send({ type: "SUCCESS", payload: result });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
      send({
        type: "ERROR",
      });
    }
  },
};

export default services;
