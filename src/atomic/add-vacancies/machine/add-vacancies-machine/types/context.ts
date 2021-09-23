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

interface Steps {
	step_one: [];
	step_two: [];
	step_three: [];
}

interface DropDownItems {
	[key: string]: string;
}

type SelectType = 'text' | 'select' | 'radio' | 'checkbox';
export interface IContext {
	application_config: {
		fields: {
			vacancy: {
				label: 'vacancy';
				required: true;
				place_holder: 'enter vacancy';
				name: 'vacancy';
				field_type?: SelectType;
			};
			location: {
				label: 'location';
				required: true;
				place_holder: 'enter location';
				name: 'location';
				field_type?: SelectType;
			};
			position_type: {
				label: 'position type';
				required: true;
				place_holder: 'enter position type';
				name: 'position_type';
				field_type?: SelectType;
				items?: string[]
			};
			job_category: {
				label: 'job category';
				required: true;
				place_holder: 'enter pick job category';
				name: 'job_category';
				field_type?: SelectType;
				items?: string[]
			};
		};
		fields_3: {};
		step_one: [
			{
				label: 'vacancy';
				required: true;
				place_holder: 'enter vacancy';
				name: 'vacancy';
				value: '' | null;
				field_type?: SelectType;
			},
			{
				label: 'location';
				required: true;
				place_holder: 'enter location';
				name: 'location';
				value: '' | null;
				field_type?: SelectType;
			},
			{
				label: 'position type';
				required: true;
				place_holder: 'enter position type';
				name: 'position_type';
				value: '' | null;
				field_type?: SelectType;
				items?: string[];
			},
			{
				label: 'job category';
				required: true;
				place_holder: 'enter pick job category';
				name: 'job_category';
				value: '' | null;
				field_type?: SelectType;
				items?: string[];
			}
		];
		step_two: [
			{
				label: 'salary';
				required: true;
				place_holder: 'enter salary';
				name: 'salary';
				value: '' | null;
				field_type?: SelectType;
			}
		];
	};
	application_data: {
		field_value: {
			vacancy: null | string;
			location: null | string;
			position_type: null | string;
			job_category: null | string;
			salary: null | string;
		};
	};
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
