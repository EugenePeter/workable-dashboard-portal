import React from 'react';
import {
	FormInput,
	CleverKeywordSelector,
} from '../../../../global-components';

import { StepFourProps } from '../../types/steps.types';

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
// interface StepFourProps {
// 	field_value: any;
// 	inputs: IFields;
// 	actions: {
// 		handleChange: (data: data) => void;
// 	};
// 	current_step: any;
// 	orientation?: 'horizontal' | 'vertical';
// }

const StepFour: React.FC<StepFourProps> = (props) => {
	const { inputs, actions, field_value, current_step } = props;
	const input_value =
		field_value[inputs?.position_and_responsibilities?.name]?.value;
	console.log('input_value', input_value ?? '');
	return (
		<div>
			{inputs?.position_and_responsibilities && (
				<FormInput
					value={input_value ?? ''}
					type={inputs?.position_and_responsibilities?.field_type ?? ''}
					placeholder={
						inputs?.position_and_responsibilities?.place_holder ?? ''
					}
					label={inputs?.position_and_responsibilities?.label ?? ''}
					actions={actions ?? {}}
					name={inputs?.position_and_responsibilities?.name ?? ''}
					accessor={inputs?.position_and_responsibilities?.accessor ?? ''}
					secondary_name={inputs?.keywords?.name ?? ''}
					current_step={current_step}
				/>
			)}
			<CleverKeywordSelector
				placeholder={inputs?.keywords?.place_holder ?? ''}
				label={inputs?.keywords?.label ?? ''}
				actions={actions ?? {}}
				name={inputs?.position_and_responsibilities?.name ?? ''}
				secondary_name={inputs?.keywords?.name ?? ''}
				current_step={current_step}
			/>
		</div>
	);
};

export default StepFour;
