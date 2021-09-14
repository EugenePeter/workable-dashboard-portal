import { FormInput } from '../../../../global-components';
import { spawn, useClever } from '../../machine/add-vacancies-machine/';
import { CleverForm } from '../../../../global-components';

interface data {
	value: string;
	name: string;
}
interface FormInputProps {
	handleChange: (data: data) => void;
}
const AddVacanciesForm = () => {
	const machine = spawn({});
	const [state, context, send] = useClever(machine);
	const { fields = {}, fields2 } = context?.application_config ?? {};
	const { vacancy = '', location = '' } =
		context?.application_data?.field_values ?? {};
	const { field_value = {} } = context?.application_data ?? {};
	console.log('ADD VACANCIES CONTEXTssss', context);

	const actions: FormInputProps = {
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

			<CleverForm inputs={fields2} actions={actions} field_value={field_value} />
		</>
	);
};

export default AddVacanciesForm;
