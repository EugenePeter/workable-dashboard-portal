import { FormInput } from '../../../../global-components';
import { spawn, useClever } from '../../machine/add-vacancies-machine/';
import { CleverForm } from '../../../../global-components';
import { StepThree } from '../steps';

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
	const { state: states } = props;
	const machine = spawn({});
	const [context, state_value, state, send] = useClever(machine);
	const { step_one, step_two, step_three } =
		context?.application_config?.steps ?? {};
	const { field_value = {} } = context?.application_data ?? {};
	const current_step = state_value.ready;

	console.log('CURRENT STATE VALUE', states.value);
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
				{state.matches('ready.step_one') && (
					// <h1>step one</h1>
					<>
						{/* {step_one.step} */}
						<CleverForm
							inputs={step_one}
							actions={actionsProp}
							field_value={field_value}
							current_step={state_value}
							orientation='vertical'
						/>
					</>
				)}
				{state.matches('ready.step_two') && (
					<>
						{/* {step_two.step} */}
						<CleverForm
							inputs={step_two}
							actions={actionsProp}
							field_value={field_value}
							current_step={state_value}
						/>
					</>
				)}
				{state.matches('ready.step_three') && (
					<>
						<StepThree
							inputs={step_three}
							actions={actionsProp}
							field_value={field_value}
							current_step={state_value}
						/>
					</>
				)}
			</>

			<button onClick={handlePrevStep}>BACK</button>
			<button onClick={handleNextStep}>NEXT</button>
		</>
	);
};

export default AddVacanciesForm;
