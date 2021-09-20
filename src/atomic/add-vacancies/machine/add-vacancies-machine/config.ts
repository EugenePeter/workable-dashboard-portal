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
								actions: ['assignFieldValueToContext'],
							},
							BACK: {
								target: 'step_one',
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
