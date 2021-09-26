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
	items?: string[];
}

interface IFields {
	[key: string]: InputItems;
}
interface CleverFormProps {
	field_value: any;
	inputs: IFields;
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
			<Section>
				{inputs?.vacancy && (
					<FormInput
						type='text'
						value={
							(field_value[inputs?.vacancy?.name] ?? '') ||
							(!field_value[inputs?.vacancy?.name] && '')
						}
						placeholder={inputs?.vacancy?.place_holder ?? ''}
						label={inputs?.vacancy?.label ?? ''}
						actions={actions ?? {}}
						name={inputs?.vacancy?.name ?? ''}
						current_step={current_step}
					/>
				)}
				{inputs?.location && (
					<FormInput
						type='text'
						value={
							(field_value[inputs?.location?.name] ?? '') ||
							(!field_value[inputs?.location?.name] && '')
						}
						placeholder={inputs?.location?.place_holder ?? ''}
						label={inputs?.location?.label ?? ''}
						actions={actions ?? {}}
						name={inputs?.location?.name ?? ''}
						current_step={current_step}
					/>
				)}
			</Section>
			<Section>
				{inputs?.position_type && (
					<CleverSelect
						orientation='vertical'
						value={
							(field_value[inputs?.position_type?.name] ?? '') ||
							(!field_value[inputs?.position_type?.name] && '')
						}
						type='drop-down'
						items={inputs?.position_type?.items ?? []}
						placeholder={inputs?.position_type?.place_holder ?? ''}
						label={inputs?.position_type?.place_holder ?? ''}
						actions={actions ?? {}}
						name={inputs?.position_type?.name ?? ''}
						current_step={current_step}
					/>
				)}
				{inputs?.job_category && (
					<CleverSelect
						orientation='vertical'
						value={
							(field_value[inputs?.job_category?.name] ?? '') ||
							(!field_value[inputs?.job_category?.name] && '')
						}
						type='drop-down'
						items={inputs?.job_category?.items ?? []}
						placeholder={inputs?.job_category?.place_holder ?? ''}
						label={inputs?.job_category?.place_holder ?? ''}
						actions={actions ?? {}}
						name={inputs?.job_category?.name ?? ''}
						current_step={current_step}
					/>
				)}
			</Section>
			{inputs?.from && (
				<CleverSelect
					value={
						(field_value[inputs?.from?.name] ?? '') ||
						(!field_value[inputs?.from?.name] && '')
					}
					type='carousel-button'
					orientation='vertical'
					items={inputs?.from?.items ?? []}
					placeholder={`${inputs?.from?.place_holder ?? ''}`}
					label={inputs?.from?.place_holder ?? ''}
					actions={actions ?? {}}
					name={inputs?.from?.name ?? ''}
					current_step={current_step}
				/>
			)}
			{inputs?.to && (
				<CleverSelect
					value={
						(field_value[inputs?.to?.name] ?? '') ||
						(!field_value[inputs?.to?.name] && '')
					}
					type='carousel-button'
					orientation='vertical'
					items={inputs?.to?.items ?? []}
					placeholder={`${inputs?.to?.place_holder ?? ''}`}
					label={inputs?.to?.place_holder ?? ''}
					actions={actions ?? {}}
					name={inputs?.to?.name ?? ''}
					current_step={current_step}
				/>
			)}
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
