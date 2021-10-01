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
      initial: "no_pending_changes",
      on: {
        ON_FIELD_UPDATE: {
          actions: ["assignFieldValueToContext"],
        },
      },
      states: {
        no_pending_changes: {
          id: "no_pending_changes",
          on: {
            ON_FIELD_UPDATE: {
              actions: ["assignFieldValueToContext"],
              target: "has_pending_change",
            },
          },
        },
        has_pending_change: {
          id: "has_pending_change",
          on: {
            ON_FIELD_UPDATE: {
              actions: ["assignFieldValueToContext"],
            },
            SUBMIT: {
              target: "front_end_validation",
            },
          },
        },
        front_end_validation: {
          on: {
            SUCCESS: {
              target: "submitting",
            },
          },
          always: {
            target: "submitting",
          },
        },
        // check_email: {
        //   invoke: {
        //     id: "does_email_already_exist",
        //     src: "doesEmailAlreadyexist",
        //   },
        //   on: {
        //     SUCCESS: {
        //       target: "submitting",
        //     },
        //     EMAIL_EXIST: {
        //       actions: ["assignEmailExistError"],
        //       target: "sign_up_error",
        //     },
        //   },
        // },
        // sign_up_error: {
        //   always: {
        //     target: "#ready",
        //   },
        // },
        server_validation: {
          on: {
            SUCCESS: {
              target: "server_validation",
            },
          },
        },
        submitting: {
          id: "submitting",
          invoke: {
            id: "submit",
            src: "submit",
          },
          on: {
            SUCCESS: {
              actions: ["assignResultsToContext"],
              target: "submitted",
            },
            ERROR: {
              actions: ["assignErrorstoContext"],
              target: "#retry",
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
    done: {
      id: "done",
      type: "final",
    },
    retry: {
      id: "retry",
      always: {
        target: "#ready",
      },
    },
    error: {},
  },
};

export default config;
