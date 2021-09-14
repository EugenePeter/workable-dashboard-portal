import { createMachine, interpret, ActorRef } from 'xstate';
import { useInterpret, useActor } from '@xstate/react';
import { IContext } from './types';
import config from './config';
import options from './options';

const default_context: IContext = {
	application_config: {
		fields: {
			vacancy: {
				label: 'vacancy',
				required: true,
				place_holder: 'enter vacancy',
				name: 'vacancy'
			},
			location: {
				label: 'location',
				required: true,
				place_holder: 'enter lcoation',
				name: 'location'
			},
			position_type: {
				label: 'position type',
				required: true,
				place_holder: 'enter position type',
				name: 'position_type'
			},
			job_category: {
				label: 'job category',
				required: true,
				place_holder: 'enter pick job category',
				name: 'job_category'
			},
		},
	},
	application_data: {
		field_values: {
			vacancy: null,
			location: null,
			position_type: null,
			job_category: null,
		},
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

export const useClever = (machine:any) => {
	const recordService = useInterpret(machine);
	const [state, send] = useActor<ActorRef<any, any>>(recordService);
	const { context = {} } = state;
	return [state, context, send];
};

export const Interpret = (context: Partial<IContext>) => {
	const machine = spawn(context);
	const service = interpret(machine).onTransition((state: any): any =>
		console.log('state interpret', state.context)
	);
	return service;
};

export * from './types';
