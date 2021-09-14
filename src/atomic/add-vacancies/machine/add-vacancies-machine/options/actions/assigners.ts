/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign } from 'xstate';
import { IContext } from '../../types';

const actions: ActionFunctionMap<IContext, any> = {
	assignFieldValueToContext: assign({
		application_data: ({ application_data }, {payload}) => {
			const { value, name } = payload;
			return {
				...application_data,
				field_values: {
					...application_data.field_values,
					[name]: value,
				},
			};
		},
	}),
};

export default actions;
