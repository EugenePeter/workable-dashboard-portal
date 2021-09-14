import { ConditionPredicate } from 'xstate';
import { IContext } from '../types';
import { IRecord } from '../types';

const guards: IRecord<ConditionPredicate<IContext, any>> = {
	doesApplicationExist: ({ active_tab, tabs }, { payload }) => {
		console.log('guard', { tabs, payload });
		console.log(
			`guards check ${tabs.some(
				(item: any) => item.application_id === payload.application_id
			)}`
		);
		return !!tabs.some(
			(item: any) => item.application_id === payload.application_id
		);
	},
};

export default guards;
