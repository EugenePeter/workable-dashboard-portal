import { DelayFunctionMap } from "xstate";
import { IContext, IMachineEvents } from "../types";

const services: DelayFunctionMap<IContext, IMachineEvents> = {};

export default services;
