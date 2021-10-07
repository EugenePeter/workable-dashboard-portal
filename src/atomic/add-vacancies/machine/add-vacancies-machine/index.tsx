import { createMachine, interpret, ActorRef } from "xstate";
import { useInterpret, useActor } from "@xstate/react";
import { IContext } from "./types";
import config from "./config";
import options from "./options";
import { fields } from "./data";

const default_context: IContext = {
  company_id: null,
  application_config: {
    fields: {
      vacancy: {
        label: "vacancy",
        required: true,
        place_holder: "enter vacancy",
        name: "vacancy",
      },
      location: {
        label: "location",
        required: true,
        place_holder: "enter location",
        name: "location",
      },
      position_type: {
        label: "position type",
        required: true,
        place_holder: "enter position type",
        name: "position_type",
        items: ["Full time", "Part time", "Casual", "temp"],
      },
      job_category: {
        label: "job category",
        required: true,
        place_holder: "enter pick job category",
        name: "job_category",
      },
    },
    steps: {
      ...fields,
    },
  },
  application_data: {
    field_value: {
      vacancy: null,
      location: null,
      position_type: null,
      job_category: null,
      salary: null,
      job_description: {
        value: null,
        keywords: [],
      },
      position_and_responsibilities: {
        value: null,
        keywords: [],
      },
      skills_and_qualifications: {
        value: null,
        keywords: [],
      },
      employer_questions: {
        value: null,
        keywords: [],
      },
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

export const useClever = (machine: any) => {
  const recordService = useInterpret(machine);
  const [state, send] = useActor<ActorRef<any, any>>(recordService);
  const { context = {}, value: state_value } = state;
  // test = { context, state_value, state, send, recordService };
  return [context, state_value, state, send];
};

export const Interpret = (context: Partial<IContext>) => {
  const machine = spawn(context);
  const service = interpret(machine).onTransition((state: any): any =>
    console.log("state interpret", state.context)
  );
  return service;
};

export * from "./types";
