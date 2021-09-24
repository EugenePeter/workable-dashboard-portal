import { ServiceConfig } from 'xstate';
import { IContext, IMachineEvents } from '../../types';
import { IRecord } from '../../types';
import { v4 as uuidv4 } from 'uuid';

// interface IHttpResponse<T = Record<string, unknown>> {
// 	payload: T;
// }

const success = true;
const results = [
	{
		application_name: 'Home',
		component_name: 'Home',
		application_id: `${uuidv4()}`,
	},
	{
		application_name: 'add vancancies',
		component_name: 'AddVacancies',
		application_id: `${uuidv4()}`,
	},
	{
		application_name: 'vancancies',
		application_id: `${uuidv4()}`,
	},
	{
		application_name: 'applicants',
		application_id: `${uuidv4()}`,
	},
	{
		application_name: 'short listed',
		application_id: `${uuidv4()}`,
	},
	{
		application_name: 'benchmark',
		application_id: `${uuidv4()}`,
	},
];
const services: IRecord<ServiceConfig<IContext, IMachineEvents>> = {
	getApplicationData: () => (send) => {
		console.log('GETTING CONFIG DATA');
		try {
			if (success)
				send({
					type: 'GOT_APPLICATION_DATA',
					payload: results,
				});
		} catch (e) {}
	},
};

export default services;
