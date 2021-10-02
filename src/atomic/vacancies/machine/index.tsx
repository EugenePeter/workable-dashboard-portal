import { createMachine, interpret, ActorRef } from "xstate";
import { useInterpret, useActor } from "@xstate/react";
import { IContext } from "./types";
import config from "./config";
import options from "./options";
// import { fields } from "./data";

const default_context: IContext = {
  company_id: null,
  application_config: {},
  application_data: {
    vacancies: [],
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

export const useClever = (machine: any) => {
  const recordService = useInterpret(machine);
  const [state, send] = useActor<ActorRef<any, any>>(recordService);
  const { context = {}, value: state_value } = state;
  // test = { context, state_value, state, send, recordService };
  return [context, state_value, state, send];
};

export const Interpret = (context: Partial<IContext>) => {
  const machine = spawn(context);
  const service = interpret(machine).onTransition((state: any): any => console.log("state interpret", state.context));
  return service;
};

export * from "./types";
