import { createMachine, interpret } from 'xstate';
import { IContext } from './types';
import config from './config';
import options from './options';

const default_context: IContext = {
	menu_items: [],
	application_data: {
		application_list: [],
	},
	tabs: [],
	active_tab: {
		application_id: '',
		application_name: '',
	},
};

export const spawn = (context: Partial<IContext>) => {
	const machine_config = {
		...config,
		context: {
			...default_context,
			...context,
		},
	};
	return createMachine(machine_config, options);
};

export const Interpret = (context: Partial<IContext>) => {
	const machine = spawn(context);
	const service = interpret(machine).onTransition((state: any): any =>
		console.log('state interpret', state.context)
	);
	return service;
};

export * from './types';
