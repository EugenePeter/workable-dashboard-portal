import { AnyStateNodeDefinition, MachineConfig } from 'xstate';
import { IContext, IMachineEvents } from './types';
const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
	{
		id: 'record-shell',
		initial: 'get_config',

		states: {
			get_config: {
				// invoke: {
				// 	id: 'get-config-data',
				// 	src: 'getConfigdData',
				// },
				// on: {
				// 	GOT_RECORD_DATA: {
				// 		actions: ['assignConfigData'],
				// 		target: 'get_record_data'
				// 	},
				// },
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
					target: 'ready'
				}
			},
			ready: {
				on: {
					OPEN_TAB: [
						{
							cond: 'doesApplicationExist',
							actions: [''],
						},
						{
							actions: ['assignTabs'],
							target: 'loading'
						},
					],
				},
			},
			done: {},
			error: {},
		},
	};

export default config;
