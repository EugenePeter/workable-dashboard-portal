/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign, AnyEventObject } from 'xstate';
import { IContext } from '../../types';

const actions: ActionFunctionMap<IContext, any> = {
	assignFieldValueToContext: assign({
		application_data: ({ application_data }, { payload }) => {
			const { value, name } = payload;
			return {
				...application_data,
				field_value: {
					...application_data.field_value,
					[name]: value,
				},
			};
		},
	}),
	assignTextAreaValueToContext: assign({
		application_data: ({ application_data }: any, { payload = {} }) => {
			const { value = '', name = '' } = payload;
			const details = application_data.field_value[name];
			console.log('assignTextAreaValueToContext', details);
			return {
				...application_data,
				field_value: {
					...application_data.field_value,
					[name]: {
						...details,
						[name]:value,
					},
				},
			};
		},
	}),
};

export default actions;
