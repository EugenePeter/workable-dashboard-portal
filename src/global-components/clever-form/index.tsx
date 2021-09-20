import React from 'react';

import { StyledForm } from './styles';
import { FormInput } from '../index';

interface data {
	value: string;
	name: string;
}
interface InputItems {
	label: string;
	name: string;
	place_holder: string;
	required: boolean;
	value?: '' | null;
}
interface CleverFormProps {
	field_value: any;
	inputs: InputItems[];
	actions: {
		handleChange: (data: data) => void;
	};
  current_step: any
}

const CleverForm: React.FC<CleverFormProps> = (props) => {
	const { inputs, actions, field_value, current_step } = props;
	console.log('INPUTS:', inputs);
	return (
		<StyledForm>
			{inputs &&
				inputs.map((input, index:number) => (
					<FormInput
						value={
							(field_value[input.name] ?? '') ||
							(!field_value[input.name] && '') 
						}
						placeholder={input?.place_holder ?? ''}
						label={input?.label ?? ''}
						actions={actions ?? {}}
						name={input?.name ?? ''}
            key={`${input?.name}-index`}
						current_step={current_step}
						// handleChange={handleInputChange}
					/>
				))}
		</StyledForm>
	);
};

export default CleverForm;
