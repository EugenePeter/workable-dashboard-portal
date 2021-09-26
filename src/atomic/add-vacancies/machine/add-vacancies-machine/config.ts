import { AnyStateNodeDefinition, MachineConfig } from 'xstate';
import { IContext, IMachineEvents } from './types';
const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
	{
		id: 'record-shell',
		initial: 'ready',

		states: {
			get_config: {
				always: {
					target: 'getApplicationData',
				},
			},
			getApplicationData: {
				invoke: {
					id: 'get-application-data',
					src: 'getApplicationData',
				},
				on: {
					GOT_APPLICATION_DATA: {
						actions: ['assignApplicationData'],
						target: 'ready',
					},
				},
			},
			get_record_data: {
				invoke: {
					id: 'get-rercord-data',
					src: 'getRecordData',
				},
				on: {
					GOT_RECORD_DATA: {
						actions: ['assignRecordData'],
					},
				},
			},
			loading: {
				always: {
					target: 'ready',
				},
			},
			ready: {
				initial: 'step_one',

				states: {
					step_one: {
						id: 'step_one',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignFieldValueToContext'],
							},
							NEXT: {
								target: 'step_two',
							},
						},
					},
					step_two: {
						id: 'step_two',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignFieldValueWithObjectDataToContext'],
							},
							NEXT: {
								target: 'step_three',
							},
							BACK: {
								target: 'step_one',
							},
						},
					},
					step_three: {
						id: 'step_three',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignTextAreaValueToContext']
							},
							NEXT: {
								target: 'step_four',
							},
							BACK: {
								target: 'step_two',
							},
						},
					},
					step_four: {
						id: 'step_four',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignFieldValueToContext'],
							},
							NEXT: {
								target: 'step_five',
							},
							BACK: {
								target: 'step_three',
							},
						},
					},
					step_five: {
						id: 'step_five',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignFieldValueToContext'],
							},
							NEXT: {
								target: 'step_six',
							},
							BACK: {
								target: 'step_four',
							},
						},
					},
					step_six: {
						id: 'step_six',
						on: {
							ON_FIELD_UPDATE: {
								actions: ['assignFieldValueToContext'],
							},
							BACK: {
								target: 'step_five',
							},
						},
					},
				},
			},
			done: {},
			error: {},
		},
	};

export default config;
