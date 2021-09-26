import React from 'react';
import { CleverSelect } from '../../../../global-components';
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
	from: string;
	place_holder: string;
	required: boolean;
	value: '' | null;
	field_type?: SelectType;
	items: string[];
}

interface ISalary {
	from: InputItems;
	to: InputItems;
	label: string;
	name: string;
}

interface IFields {
	[key: string]: ISalary;
}
interface StepTwoProps {
	field_value: any;
	inputs: IFields;
	actions: {
		handleChange: (data: data) => void;
	};
	current_step: any;
	orientation?: 'horizontal' | 'vertical';
}

const StepTwo: React.FC<StepTwoProps> = (props) => {
	const { inputs, actions, field_value, current_step } = props;
	const input_value = field_value[inputs?.salary?.name];

	// console.log('STEP TWO INPUTS', inputs.salary.name);
	console.log('input_value', input_value);
	return (
		<div>
			{inputs?.salary.from && (
				<>
					<CleverSelect
						value={input_value ?? ''}
						type='carousel-button'
						orientation='vertical'
						items={inputs?.salary?.from?.items ?? []}
						placeholder={`${inputs?.salary?.from?.place_holder ?? ''}`}
						label={inputs?.salary?.from?.place_holder ?? ''}
						actions={actions ?? {}}
						name={inputs?.salary?.name ?? ''}
						secondary_name={inputs?.salary?.from?.name ?? ''}
						current_step={current_step}
					/>
				</>
			)}
			{inputs?.salary.to && (
				<>
					<CleverSelect
						value={input_value ?? ''}
						type='carousel-button'
						orientation='vertical'
						items={inputs?.salary?.to?.items ?? []}
						placeholder={`${inputs?.salary?.to?.place_holder ?? ''}`}
						label={inputs?.salary?.to?.place_holder ?? ''}
						actions={actions ?? {}}
						name={inputs?.salary?.name ?? ''}
						secondary_name={inputs?.salary?.to?.name ?? ''}
						current_step={current_step}
					/>
				</>
			)}
		</div>
	);
};

export default StepTwo;
