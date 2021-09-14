import { ActivityConfig } from "xstate";
import { IContext, IMachineEvents } from "../types";
import { IRecord } from "../types";

const activities: IRecord<ActivityConfig<IContext, IMachineEvents>> = {};

export default activities;
