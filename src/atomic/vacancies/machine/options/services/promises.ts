import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import { GraphQLClient } from "graphql-request";
import { GET_VACANCIES } from "../../gql";

// import axios from "axios";

// const { GET_VACANCIES_API_ENDPOINT = "http://localhost:6060/graphql" } = process.env;

const { GET_VACANCIES_API_ENDPOINT = "https://workable-get-vacancies.herokuapp.com/graphql" } =
  process.env;
// const { GET_VACANCIES_API_ENDPOINT2 = "http://localhost:6060/vacancies" } = process.env;

const graphql = new GraphQLClient(GET_VACANCIES_API_ENDPOINT, {
  headers: {},
});

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  getVacancies: (context) => async (send: any) => {
    const { company_id = "" } = context ?? {};
    try {
      const { result } = await graphql.request(GET_VACANCIES, {
        params: company_id,
      });
      console.log("VACANCIES FOUND", result);
      send({ type: "SUCCESS", payload: result });
      // const {
      //   data: { vacancies },
      // } = await axios.get(`${GET_VACANCIES_API_ENDPOINT2}`);
      // console.log("VACANCIES FOUND", vacancies);
      // send({ type: "SUCCESS", payload: vacancies });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
      send({
        type: "ERROR",
      });
    }
  },
};

export default services;
