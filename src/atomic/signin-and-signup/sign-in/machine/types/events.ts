export interface IFieldUpdate {
  type: "ON_FIELD_UPDATE";
  payload: any;
}

export interface INextEvent {
  type: "NEXT";
  payload: any;
}

export interface IPrevEvent {
  type: "BACK";
  payload: any;
}

export interface IGotConfigData {
  type: "GOT_RECORD_DATA";
  payload: any;
}

export interface IGotApplicationData {
  type: "GOT_APPLICATION_DATA";
  payload: any;
}

export interface ISubmitEvent {
  type: "SUBMIT";
  payload: any;
}

export interface ISuccessEvent {
  type: "SUCCESS";
  payload: any;
}

export interface IEmailExistEvent {
  type: "EMAIL_EXIST";
  payload: any;
}

export interface IServerError {
  type: "ERROR";
  payload: any;
}

export type IMachineEvents =
  | IFieldUpdate
  | INextEvent
  | IPrevEvent
  | IGotConfigData
  | IGotApplicationData
  | ISubmitEvent
  | ISuccessEvent
  | IEmailExistEvent
  | IServerError;
