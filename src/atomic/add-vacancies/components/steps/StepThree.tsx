import React from 'react';
import { FormInput } from '../../../../global-components';
interface data {
	value: string;
	name: string;
}

type SelectType = 'text' | 'select' | 'radio' | 'checkbox';

interface JobDescriptionObject {
	description: string;
	keywords: string[];
}
interface InputItems {
	label: string;
	name: string;
	place_holder: string;
	required: boolean;
	value?: '' | null;
	field_type?: SelectType;
	items?: string[];
}

interface IFields {
	[key: string]: InputItems;
}
interface StepThreeProps {
	field_value: any;
	inputs: IFields;
	actions: {
		handleChange: (data: data) => void;
	};
	current_step: any;
	orientation?: 'horizontal' | 'vertical';
}

const StepThree: React.FC<StepThreeProps> = (props) => {
	const { inputs, actions, field_value, current_step, orientation } = props;

	return (
		<div>
			{inputs?.job_description && (
				<FormInput
					value={
						(field_value[inputs?.job_description?.name].job_description ?? '') ||
						(!field_value[inputs?.job_description?.name].job_description && '')
					}
					type='textarea'
					placeholder={inputs?.job_description?.place_holder ?? ''}
					label={inputs?.job_description?.label ?? ''}
					actions={actions ?? {}}
					name={inputs?.job_description?.name ?? ''}
					current_step={current_step}
				/>
			)}
		</div>
	);
};

export default StepThree;
