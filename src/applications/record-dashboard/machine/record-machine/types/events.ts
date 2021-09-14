export interface IOpenTab {
	type: 'OPEN_TAB';
	payload: any;
}

export interface IGotConfigData {
  type: 'GOT_RECORD_DATA',
  payload: any
}

export interface IGotApplicationData {
  type: 'GOT_APPLICATION_DATA'
  payload: any
}

export type IMachineEvents = IOpenTab | IGotConfigData | IGotApplicationData;
