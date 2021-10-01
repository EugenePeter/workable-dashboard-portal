import { createMachine, interpret, ActorRef } from "xstate";
import { useInterpret, useActor } from "@xstate/react";
import { IContext } from "./types";
import config from "./config";
import options from "./options";

const default_context: IContext = {
  application_config: {
    fields: {
      email: {
        label: "email",
        required: true,
        place_holder: "enter email",
        name: "email",
      },
      password: {
        label: "password",
        required: true,
        place_holder: "enter password",
        name: "password",
      },
    },
  },
  application_data: {
    field_value: {
      email: null,
      password: null,
    },
    results: {},
  },
};

export const spawn = (context: Partial<IContext>) => {
  const machine_config = {
    ...config,
    context: {
      ...default_context,
      ...context,
    },
  };
  return createMachine(machine_config, options);
};

// export let test = {};

export const useSignUp = (machine: any) => {
  const recordService = useInterpret(machine);
  const [state, send] = useActor<ActorRef<any, any>>(recordService);
  const { context = {}, value: state_value } = state;
  return [context, state_value, state, send];
};

export const Interpret = (context: Partial<IContext>) => {
  const machine = spawn(context);
  const service = interpret(machine).onTransition((state: any): any => console.log("state interpret", state.context));
  return service;
};

export * from "./types";
