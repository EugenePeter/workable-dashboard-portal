import React from 'react';
import styled from 'styled-components';

import { StyledForm } from './styles';
import { FormInput, CleverSelect } from '../index';

interface data {
	value: string;
	name: string;
}

type SelectType = 'text' | 'select' | 'radio' | 'checkbox';
interface InputItems {
	label: string;
	name: string;
	place_holder: string;
	required: boolean;
	value?: '' | null;
	field_type?: SelectType;
	items?: any;
}
interface CleverFormProps {
	field_value: any;
	inputs: InputItems[];
	actions: {
		handleChange: (data: data) => void;
	};
	current_step: any;
	orientation?: 'horizontal' | 'vertical';
}

const CleverForm: React.FC<CleverFormProps> = (props) => {
	const { inputs, actions, field_value, current_step, orientation } = props;
	console.log('INPUTS:', inputs);
	console.log('ACTIONS:', actions);

	return (
		<StyledForm orientation={orientation} className='clever-form_parent'>
			<Section className='section'>
				{inputs &&
					inputs
						.filter((input) => input.field_type === 'text')
						.map((input, index) => {
							return (
								<FormInput
									value={
										(field_value[input.name] ?? '') ||
										(!field_value[input.name] && '')
									}
									placeholder={input?.place_holder ?? ''}
									label={input?.label ?? ''}
									actions={actions ?? {}}
									name={input?.name ?? ''}
									key={index}
									current_step={current_step}
								/>
							);
						})}
			</Section>
			<Section>
				{inputs &&
					inputs
						.filter((input) => input.field_type === 'select')
						.map((input, index) => {
							return (
								<CleverSelect
									value={
										(field_value[input.name] ?? '') ||
										(!field_value[input.name] && '')
									}
									items={input}
									placeholder={input?.place_holder ?? ''}
									label={input?.label ?? ''}
									actions={actions ?? {}}
									name={input?.name ?? ''}
									key={index}
									current_step={current_step}
								/>
							);
						})}
			</Section>
		</StyledForm>
	);
};

export default CleverForm;

export const Section = styled.div`
	display: flex;
	flex-direction: row;
	/* background-color: blue; */
	/* height: 300px; */

	div:nth-of-type(2) {
		margin: 0;
	}
`;
