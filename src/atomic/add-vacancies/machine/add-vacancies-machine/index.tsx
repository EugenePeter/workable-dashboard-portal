import { createMachine, interpret, ActorRef } from 'xstate';
import { useInterpret, useActor } from '@xstate/react';
import { IContext } from './types';
import config from './config';
import options from './options';
import { fields_3 } from './data';

const default_context: IContext = {
	application_config: {
		fields: {
			vacancy: {
				label: 'vacancy',
				required: true,
				place_holder: 'enter vacancy',
				name: 'vacancy',
			},
			location: {
				label: 'location',
				required: true,
				place_holder: 'enter location',
				name: 'location',
			},
			position_type: {
				label: 'position type',
				required: true,
				place_holder: 'enter position type',
				name: 'position_type',
				items: ['Full time', 'Part time', 'Casual', 'temp'],
			},
			job_category: {
				label: 'job category',
				required: true,
				place_holder: 'enter pick job category',
				name: 'job_category',
			},
		},
		fields_3,
		step_one: [
			{
				label: 'vacancy',
				required: true,
				place_holder: 'enter vacancy',
				name: 'vacancy',
				value: null,
				field_type: 'text',
			},
			{
				label: 'location',
				required: true,
				place_holder: 'enter location',
				name: 'location',
				value: null,
				field_type: 'text',
			},
			{
				label: 'position type',
				required: true,
				place_holder: 'enter position type',
				name: 'position_type',
				value: null,
				field_type: 'select',
				items: ['Full time', 'Part time', 'Casual', 'temp'],
			},
			{
				label: 'job category',
				required: true,
				place_holder: 'enter pick job category',
				name: 'job_category',
				value: null,
				field_type: 'select',
				items: ['Full time', 'Part time', 'Casual', 'temp'],
			},
		],
		step_two: [
			{
				label: 'salary',
				required: true,
				place_holder: 'enter salary',
				name: 'salary',
				value: null,
				field_type: 'text',
			},
		],
	},
	application_data: {
		field_value: {
			vacancy: null,
			location: null,
			position_type: null,
			job_category: null,
			salary: null,
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

export const useClever = (machine: any) => {
	const recordService = useInterpret(machine);
	const [state, send] = useActor<ActorRef<any, any>>(recordService);
	const { context = {}, value: state_value } = state;
	return [context, state_value, state, send];
};

export const Interpret = (context: Partial<IContext>) => {
	const machine = spawn(context);
	const service = interpret(machine).onTransition((state: any): any =>
		console.log('state interpret', state.context)
	);
	return service;
};

export * from './types';
