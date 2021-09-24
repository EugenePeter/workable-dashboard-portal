import { FormInput } from '../../../../global-components';
import { spawn, useClever } from '../../machine/add-vacancies-machine/';
import { CleverForm } from '../../../../global-components';
interface data {
	value: string;
	name: string;
}
interface CleverFormActions {
	handleChange: (data: data) => void;
}

interface IAddVacanciesForm {
	state: any;
}
const AddVacanciesForm: React.FC<IAddVacanciesForm> = (props) => {

	const {state: states} = props
	const machine = spawn({});
	const [context, state_value, state, send] = useClever(machine);
	const { step_one, step_two } = context?.application_config ?? {};
	// const { vacancy = '', location = '' } =
	// 	context?.application_data?.field_values ?? {};
	const { field_value = {} } = context?.application_data ?? {};
	const current_step = state_value.ready;

	console.log('CURRENT STATE VALUE', state_value);
	console.log('CURRENT STATE CONTEXT', context);
	const handleNextStep = () => {
		send({
			type: 'NEXT',
		});
	};
	const handlePrevStep = () => {
		send({
			type: 'BACK',
		});
	};
	const actionsProp: CleverFormActions = {
		handleChange: (data: data) => {
			console.log('DATAAAAA:', data);
			send({
				type: 'ON_FIELD_UPDATE',
				payload: data,
			});
		},
	};

	return (
		<>
			{/* {EXPECTS AN ARRAY IF FIELDS} */}
			{/* <h1>{JSON.stringify(state_value)}</h1> */}
			<>
				{states.matches('ready.step_one') && (
					<CleverForm
						inputs={step_one}
						actions={actionsProp}
						field_value={field_value}
						current_step={state_value}
						orientation='vertical'
					/>
				)}
				{states.matches('ready.step_two') && (
					<CleverForm
						inputs={step_two}
						actions={actionsProp}
						field_value={field_value}
						current_step={state_value}
					/>
				)}
			</>

			<button onClick={handlePrevStep}>BACK</button>
			<button onClick={handleNextStep}>NEXT</button>
		</>
	);
};

export default AddVacanciesForm;
