import React from 'react';
import {
	FormInput,
	CleverKeywordSelector,
} from '../../../../global-components';

import { StepFiveProps } from '../../types/steps.types';
// interface data {
// 	value: string;
// 	name?: string;
// 	secondary_name?: string;
// }

// type SelectType = 'text' | 'select' | 'radio' | 'checkbox';

// interface InputItems {
// 	label: string;
// 	name: string;
// 	place_holder: string;
// 	required: boolean;
// 	value?: '' | null;
// 	field_type?: SelectType;
// 	items?: string[];
// 	subtitle?: string;
// 	accessor?: string;
// }

// interface IFields {
// 	[key: string]: InputItems;
// }
// interface StepThreeProps {
// 	field_value: any;
// 	inputs: IFields;
// 	actions: {
// 		handleChange: (data: data) => void;
// 	};
// 	current_step: any;
// 	orientation?: 'horizontal' | 'vertical';
// }

const StepFive: React.FC<StepFiveProps> = (props) => {
	const { inputs, actions, field_value, current_step } = props;
	const input_value =
		field_value[inputs?.skills_and_qualifications?.name]?.value;
	console.log('input_value', input_value);
	return (
		<div>
			{inputs?.skills_and_qualifications && (
				<FormInput
					value={input_value ?? ''}
					type={inputs?.skills_and_qualifications?.field_type ?? ''}
					placeholder={inputs?.skills_and_qualifications?.place_holder ?? ''}
					label={inputs?.skills_and_qualifications?.label ?? ''}
					actions={actions ?? {}}
					name={inputs?.skills_and_qualifications?.name ?? ''}
					accessor={inputs?.skills_and_qualifications?.accessor ?? ''}
					secondary_name={inputs?.keywords?.name ?? ''}
					current_step={current_step}
				/>
			)}
			<CleverKeywordSelector
				placeholder={inputs?.keywords?.place_holder ?? ''}
				label={inputs?.keywords?.label ?? ''}
				actions={actions ?? {}}
				name={inputs?.skills_and_qualifications?.name ?? ''}
				secondary_name={inputs?.keywords?.name ?? ''}
				current_step={current_step}
			/>
		</div>
	);
};

export default StepFive;
