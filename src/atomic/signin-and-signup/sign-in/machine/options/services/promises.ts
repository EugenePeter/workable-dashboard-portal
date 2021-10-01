/* eslint-disable indent */
import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import axios from "axios";

const URL = "http://localhost:1010/login";

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  submit:
    ({ application_data }) =>
    async (send) => {
      const { field_value = {} } = application_data ?? {};
      try {
        const result = await axios.post(URL, field_value);
        console.log("AXIOS RESPONSE", result);

        const {
          data: { company_name, email, message, successfuly_signedin, token },
        } = result;
        console.log("successfuly_signedin", successfuly_signedin);
        if (successfuly_signedin) {
          send({
            type: "SUCCESS",
            payload: {
              token,
              company_name,
              email,
              message,
              successfuly_signedin,
            },
          });
          localStorage.setItem("token", token);
        }
      } catch (e: any) {
        const { data } = e.response;
        send({
          type: "ERROR",
          payload: data,
        });
        console.log("SIGN UP SUBMISSION ERROR:", e.response);
      }
    },
};

export default services;
