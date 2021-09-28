import { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { spawn, useClever } from './machine/add-vacancies-machine';
import { data } from './types';

export const AddVacanciesContext = createContext<any | null>(null);

// interface data {
// 	value: string;
// 	name?: string;
// 	secondary_name?: string;
// }
interface AddVacanciesActions {
	handleChange: (data: data) => void;
	handleNextStep: (data: data) => void;
	handlePrevStep: (data: data) => void;
}

const AddVacanciesProvider: React.FC<any> = (props) => {
	const { children } = props;
	const machine = spawn({});
	const [context, state_value, state, send] = useClever(machine);

	// const handleNextStep = () => {
	// 	send({
	// 		type: 'NEXT',
	// 	});
	// };
	// const handlePrevStep = () => {
	// 	send({
	// 		type: 'BACK',
	// 	});
	// };

	const actionsProp: AddVacanciesActions = {
		handleChange: (data: data) => {
			console.log('DATAAAAA:', data);
			send({
				type: 'ON_FIELD_UPDATE',
				payload: data,
			});
		},
		handleNextStep: () => {
			send({
				type: 'NEXT',
			});
		},
		handlePrevStep: () => {
			send({
				type: 'BACK',
			});
		},
	};

	return (
		<AddVacanciesContext.Provider
			value={{ context, state_value, state, send, actionsProp }}
		>
			{children}
		</AddVacanciesContext.Provider>
	);
};

export default AddVacanciesProvider;
