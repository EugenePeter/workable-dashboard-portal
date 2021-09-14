import { useState } from 'react';
import { FormInput } from '../../../../global-components';
import { useInterpret, useActor } from '@xstate/react';
import { ActorRef } from 'xstate';
import { spawn, useClever } from '../../machine/add-vacancies-machine/';

interface data {
	value: string;
	name: string;
}
interface FormInputProps {
	handleChange: (data: data) => void;
}
const AddVacanciesForm = () => {
	// const [state, setState] = useState('');

	const machine = spawn({});
	const [state, context, send] = useClever(machine);
	const { fields = {} } = context?.application_config ?? {};
	const { vacancy = '', location = '' } = context?.application_data?.field_values ?? {};
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
			<FormInput
				value={vacancy}
				placeholder={fields?.vacancy?.place_holder}
				label={fields?.vacancy?.label}
				actions={actions}
				name={fields?.vacancy?.name}
				// handleChange={handleInputChange}
			/>
						<FormInput
				value={location}
				placeholder={fields?.location?.place_holder}
				label={fields?.location?.label}
				actions={actions}
				name={fields.location.name}
				// handleChange={handleInputChange}
			/>
		</>
	);
};

export default AddVacanciesForm;
