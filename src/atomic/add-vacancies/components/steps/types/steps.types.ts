export interface data {
	value: string;
	name?: string;
	secondary_name?: string;
}

export type SelectType = 'text' | 'select' | 'radio' | 'checkbox';

export interface InputItems {
	label: string;
	name: string;
	place_holder: string;
	required: boolean;
	value?: '' | null;
	field_type?: SelectType;
	items?: string[];
	subtitle?: string;
	accessor?: string;
}

interface ISalary {
	from: InputItems;
	to: InputItems;
	label: string;
	name: string;
}
export interface IFields {
	[key: string]: InputItems;
}

export interface IStepTwoFields {
	[key: string]: ISalary;
}

export interface ISteps {
	field_value: any;
	// inputs: IFields;
	actions: {
		handleChange: (data: data) => void;
	};
	current_step: any;
	orientation?: 'horizontal' | 'vertical';
}

export interface StepSixProps extends ISteps {
	inputs: IFields;
}

export interface StepFiveProps extends ISteps {
	inputs: IFields;
}

export interface StepFourProps extends ISteps {
	inputs: IFields;
}

export interface StepThreeProps extends ISteps {
	inputs: IFields;
}

export interface StepTwoProps extends ISteps {
	inputs: IStepTwoFields;
}


