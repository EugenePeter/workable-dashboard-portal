/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import { ActionFunctionMap, assign } from 'xstate';
import { IContext } from '../../types';

const actions: ActionFunctionMap<IContext, any> = {
	assignTabs: assign({
		tabs: ({ tabs }, { payload }) => {
			console.log("assign tabs:", payload)
			// const filtered_tabs = tabs.filter((item:any) => {
			// 	return item.application_id !== payload.application_id
			// })
			// console.log("PAYLOAD TAB:", active_tab, filtered_tabs)
			return [...tabs, payload];
		},
		active_tab: (_, { payload }) => {
			return payload
		},
	}),
	assignAsCurrentTab: assign({
		active_tab: (_, { payload }) => {
			return payload
		},
	}),
	assignApplicationData: assign({
		application_data: ({ application_data }, { payload }) => {
			// return [...application_data, ...payload];
			// console.log('ASSIGN APPLICATION', payload)
			return {
				...application_data,
				application_list: [
					...application_data.application_list,
					...payload
				]
			}
		},
	}),
	assignConfigData: assign({
		menu_items: ({ menu_items }, { payload }) => {
			return [...menu_items, ...payload];
		},
	}),
};

export default actions;
