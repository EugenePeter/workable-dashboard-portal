// interface IParams {
// 	record_id: string;
// 	record_id_list: string[];
// 	entity: string;
// }

interface IApplicationData {
	application_list: Object[];
}

type ImenuItems = string;
interface IActiveTab {
	application_id: string;
	application_name: string;
}

interface Itabs {
	application_id: string;
	application_name: string;
}

export interface IContext {
	// application_config: Partial<IApplicationConfig>
	// application_data: IApplicationData
	// params: IParams
	menu_items: ImenuItems[];
	active_tab: IActiveTab;
	tabs: Itabs[];
	application_data: IApplicationData;
}

// export interface IApplicationConfig {
//   theme: Record<string, unknown>
//   slots_config: {
//     [P in Slots]?: ISlotConfig
//   }
//   toolbar_buttons: {
//     edit: IButtonConfig
//     cancel: IButtonConfig
//     archive: IButtonConfig
//     save: IButtonConfig
//     save_and_close: IButtonConfig
//   }
//   pager_buttons: {
//     previous: IButtonConfig
//     next: IButtonConfig
//   }
// }

// export interface IApplicationData {
//   current_application: {
//     [P in Slots]?: IComponentConfig
//   }
//   application_lists: {
//     [P in Slots]?: IComponentConfig[]
//   }
//   records_list: IRecordItem[]
//   current_record_index: number
//   children_initial_data: Record<string, IChildInitialData>
//   children_pending_changes: Record<string, IPendingChange>
// }

export interface IRecord<TEntry> {
	[key: string]: TEntry;
}

// export type IChildInitialData = Pick<
//   IPendingChange,
//   'application_id' | 'data' | 'current_hash'
// >

// export interface IPendingChange {
//   application_id: string
//   data: Record<string, any>
//   workflow_fn: string
//   workflow_fn_route: string
//   current_hash: string
//   response_messages: {
//     success: IToastShellConfig
//     error: IToastShellConfig
//   }
// }

// export interface IRecordItem {
//   id: string
//   name: string // record name/display name
// }

// export interface IRecordUpdateResponse {
//   success: boolean
//   payload: {
//     source: IPendingChange
//     result: Record<string, any>
//   }
// }

// interface ISlotConfig {
//   enabled: boolean
//   maximum?: number
// }

// interface IButtonConfig {
//   name: string
//   loading_text?: string
//   icon: string
//   hidden: boolean
//   disabled: boolean
// }
