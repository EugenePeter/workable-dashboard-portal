/* eslint-disable indent */
import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import axios from "axios";

// const URL = "http://localhost:4040/registerCompany";
const URL = "https://workable-sign-up-api.herokuapp.com/registerCompany";

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  submit:
    ({ application_data }) =>
    async (send) => {
      const { field_value = {} } = application_data ?? {};
      try {
        const result = await axios.post(URL, field_value);
        const {
          data: { company_name, email, message, successfuly_registered },
        } = result;
        console.log("successfuly_registered", successfuly_registered);
        console.log("AXIOS RESPONSE", result);
        successfuly_registered &&
          send({
            type: "SUCCESS",
            payload: {
              company_name,
              email,
              message,
              successfuly_registered,
            },
          });
      } catch (e: any) {
        const { data } = e.response;
        send({
          type: "ERROR",
          payload: data,
        });
        console.log("SIGN UP SUBMISSION ERROR:", e.response);
        console.error(JSON.stringify(e, undefined, 2));
      }
    },
};

export default services;
