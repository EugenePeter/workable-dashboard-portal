import { useState, useCallback, useEffect, useRef } from 'react';

import styled from 'styled-components';

const FormInput = () => {
	const [first_name, setFirstName] = useState('');
	const [is_input_active, setInputActive] = useState(false);
	const [is_label_click, setLabelClick] = useState(false);

	const handleInputChange = (event: any) => {
		const { value } = event.target;
		setFirstName(value);
	};

	const handleLabelClick = () => {
		setLabelClick(() => {
			return true;
		});
	};
	console.log('IM AM IS INPUT ACTIVE', is_input_active);

	const inputRef = useRef<any>();
	useEffect(() => {
		if (is_label_click === true) {
			console.log('IM AM CLICKED!!!!! INSIDE USEeFFECT');
			inputRef.current.focus();
		}
	}, [is_label_click]);

	const inputActiveHandler = () => {
		first_name !== '' && setInputActive(true);
	};

	const handleBlurInput = () => {
		if (first_name === '') {
			setInputActive(false);
			setLabelClick(false);
		}
	};

	return (
		<InputContainer>
			<h1>{first_name} </h1>
			<h1>{is_input_active} </h1>
			<Label
				is_input_active={is_input_active}
				first_name={first_name}
				onClick={handleLabelClick}
			>
				First Name
			</Label>
			<Input
				type='text'
				value={first_name}
				placeholder='First Name'
				onChange={handleInputChange}
				onFocus={() => setInputActive(true)}
				onClick={() => setInputActive(true)}
				onBlur={handleBlurInput}
				ref={inputRef}
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
	first_name: string;
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
	transition: transform 0.4s cubic-bezier(.23,0,0,1.01);
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
