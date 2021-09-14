import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';
interface data {
	value: string;
	name: string;
}
interface FormInputProps {
	value: string;
	placeholder: string;
	label: string;
	name: string;
	actions: {
		handleChange: (data: data) => void;
	};
}
const FormInput: React.FC<FormInputProps> = (props) => {
	const { value, placeholder, label, actions, name } = props;
	const [is_input_active, setInputActive] = useState(false);
	const [is_label_click, setLabelClick] = useState(false);

	const handleInputChange = (event: any) => {
		const { value, name } = event.target;
		actions.handleChange({ value, name });
	};

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
	}, [value])

	const handleBlurInput = () => {
		if (value === '' || null || undefined) {
			setInputActive(false);
			setLabelClick(false);
		}
	};

	return (
		<InputContainer>
			<Label
				is_input_active={is_input_active}
				onClick={handleLabelClick}
			>
				{label}
			</Label>
			<Input
				type='text'
				value={value}
				placeholder={is_input_active ? placeholder : ''}
				onChange={handleInputChange}
				onFocus={() => setInputActive(true)}
				onClick={() => setInputActive(true)}
				onBlur={handleBlurInput}
				ref={inputRef}
				name={name}
			/>
		</InputContainer>
	);
};

export default FormInput;

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

export const InputContainer = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
`;
