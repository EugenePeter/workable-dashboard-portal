import React from 'react';
import {
	FormInput,
	CleverKeywordSelector,
} from '../../../../global-components';

import { StepThreeProps } from '../../types/steps.types';
// interface data {
// 	value: string;
// 	name?: string;
// 	secondary_name?: string;
// }

// type SelectType = 'text' | 'select' | 'radio' | 'checkbox';

// interface InputItems {
// 	label: string;
// 	name: string;
// 	accessor?:string
// 	place_holder: string;
// 	required: boolean;
// 	value?: '' | null;
// 	field_type?: SelectType;
// 	items?: string[];
// 	subtitle?: string;
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

const StepSix: React.FC<StepThreeProps> = (props) => {
	const { inputs, actions, field_value, current_step } = props;
	const input_value = field_value[inputs?.employer_questions?.name]?.value;
	console.log('input_value', input_value);
	return (
		<div>
			{inputs?.employer_questions && (
				<FormInput
					value={input_value ?? ''}
					type={inputs?.employer_questions?.field_type ?? ''}
					placeholder={inputs?.employer_questions?.place_holder ?? ''}
					label={inputs?.employer_questions?.label ?? ''}
					actions={actions ?? {}}
					name={inputs?.employer_questions?.name ?? ''}
					accessor={inputs?.employer_questions?.accessor ?? ''}
					secondary_name={inputs?.keywords?.name ?? ''}
					current_step={current_step}
				/>
			)}
			<CleverKeywordSelector
				placeholder={inputs?.keywords?.place_holder ?? ''}
				label={inputs?.keywords?.label ?? ''}
				actions={actions ?? {}}
				name={inputs?.employer_questions?.name ?? ''}
				secondary_name={inputs?.keywords?.name ?? ''}
				current_step={current_step}
			/>
		</div>
	);
};

export default StepSix;
