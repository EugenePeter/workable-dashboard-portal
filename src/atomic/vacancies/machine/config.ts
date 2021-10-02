import { AnyStateNodeDefinition, MachineConfig } from "xstate";
import { IContext, IMachineEvents } from "./types";
const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> = {
  id: "record-shell",
  initial: "ready",

  states: {
    get_config: {
      always: {
        target: "getApplicationData",
      },
    },
    getApplicationData: {
      invoke: {
        id: "get-application-data",
        src: "getApplicationData",
      },
      on: {
        GOT_APPLICATION_DATA: {
          actions: ["assignApplicationData"],
          target: "ready",
        },
      },
    },
    get_record_data: {
      invoke: {
        id: "get-rercord-data",
        src: "getRecordData",
      },
      on: {
        GOT_RECORD_DATA: {
          actions: ["assignRecordData"],
        },
      },
    },
    loading: {
      always: {
        target: "ready",
      },
    },
    ready: {
      id: "ready",
      initial: "get_vacancies",
      states: {
        get_vacancies: {
          id: "submit",
          invoke: {
            id: "submit",
            src: "submit",
          },
          on: {
            SUCCESS: {
              actions: ["assignResultsToContext"],
              target: "#done",
            },
            ERROR: {
              actions: ["assignErrorstoContext", (_: any, e) => console.log("ERROR:", e)],
              target: "#error",
            },
          },
        },
        submitted: {
          id: "submitted",
          always: {
            target: "#done",
          },
        },
      },
    },
    retry: {
      id: "retry",
      always: {
        target: "#ready",
      },
    },
    done: {
      id: "done",
      type: "final",
    },
    error: {
      id: "error",
      type: "final",
    },
  },
};

export default config;
