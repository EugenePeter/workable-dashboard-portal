import { ServiceConfig } from "xstate";
import { IContext, IMachineEvents } from "../../types";
import { IRecord } from "../../types";

import callbacks from "./callbacks";
import promises from "./promises";

const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
  ...callbacks,
  ...promises,
};

export default services;
