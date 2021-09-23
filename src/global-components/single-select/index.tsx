import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
interface data {
	value: string;
	name: string;
}
interface CleverSelectProps {
	value: string;
	placeholder: string;
	label: string;
	name: string;
	actions: {
		handleChange: (data: data) => void;
	};
	current_step: any;
	items?: any;
}
const CleverSelect: React.FC<CleverSelectProps> = (props) => {
	const {
		value,
		placeholder,
		label,
		actions,
		name,
		current_step,
		items = [],
	} = props;
	const [is_input_active, setInputActive] = useState(false);
	const [is_label_click, setLabelClick] = useState(false);

	const handleDropDownItemClick = (event: any) => {
		console.log('SELECTED ITEM:', event);
		const {
			items: { name },
			item: value,
		} = event;
		actions.handleChange({ value, name });
	};

	console.log('ITEMS:', items);
	const handleLabelClick = () => {
		setLabelClick(() => {
			return true;
		});
	};
	console.log('IM AM IS INPUT ACTIVE', is_input_active);
	console.log('value', value);

	const inputRef = useRef<any>();
	useEffect(() => {
		if (is_label_click === true) {
			console.log('IM AM CLICKED!!!!! INSIDE USEeFFECT');
			inputRef.current.focus();
		}
	}, [is_label_click]);

	useEffect(() => {
		if (value === '' || null || undefined) {
			setInputActive(false);
			setLabelClick(false);
		}
	}, [value, current_step]);

	const handleBlurInput = () => {
		if (value === '' || null || undefined) {
			setInputActive(false);
			setLabelClick(false);
		}
	};

	return (
		<InputContainer>
			<Label is_input_active={is_input_active} onClick={handleLabelClick}>
				{label}
			</Label>
			<Input
				type='text'
				value={value}
				placeholder={is_input_active ? placeholder : ''}
				onFocus={() => setInputActive(true)}
				onClick={() => setInputActive(true)}
				onBlur={handleBlurInput}
				ref={inputRef}
				name={name}
			/>
			<CleverDropDown>
				{items &&
					items.items.map((item: string, index: number) => (
						<DropDownItems
							onClick={() => handleDropDownItemClick({ items, item })}
							key={index}
						>
							{item}{' '}
						</DropDownItems>
					))}
			</CleverDropDown>
		</InputContainer>
	);
};

export default CleverSelect;

export const CleverDropDown = styled.div`
	width: 100%;
	border: solid 0.1px #585858;
	border-top: none;
	box-sizing: border-box;
`;
export const DropDownItems = styled.div`
	display: flex;
	background-color: #f3f3f3;
	line-height: 40px;
	/* border-bottom: solid 0.1px #585858; */
	padding-left: 1.4rem;
	box-sizing: border-box;
	font-size: small;
`;

export const Input = styled.input`
	width: 100%;
	/* background-color: #ebebeb; */
	line-height: 40px;
	/* border: none; */
	outline-color: #5cd176;
	padding-left: 1.4rem;
	margin: 0;
	max-width: 100%;
	box-sizing: border-box;
`;

interface LabelProps {
	is_input_active: boolean;
	// first_name: string;
}
export const Label = styled.label<LabelProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: #fff;
	padding: 0 0.6rem 0 0.6rem;
	z-index: 1;
	transform: ${({ is_input_active }) =>
		is_input_active ? `translate(.8rem, .5rem)` : `translate(1rem, 2rem)`};
	transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
	&:hover {
		cursor: text;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;
