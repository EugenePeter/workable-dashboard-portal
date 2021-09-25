import { useState, useEffect, useRef } from 'react';

import styled, { css, keyframes } from 'styled-components';
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
	orientation?: 'horizontal' | 'vertical';
	type?: string;
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
		orientation,
		type,
	} = props;
	const [is_input_active, setInputActive] = useState(false);
	const [is_label_click, setLabelClick] = useState(false);

	const handleDropDownItemClick = (event: any) => {
		console.log('SELECTED ITEM:', event);
		const { name, item: value } = event;
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
		if (value) setInputActive(true);
	}, [value, current_step]);

	const handleBlurInput = () => {
		if (value === '' || null || undefined) {
			setInputActive(false);
			setLabelClick(false);
		}
	};

	return (
		<>
			{type && type === 'drop-down' && (
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
						disabled
					/>
					<CleverDropDown>
						{items &&
							items.map((item: string, index: number) => (
								<DropDown key={index}>
									<input type='radio' name='position_type' id='' />
									<DropDownItems
										orientation={orientation}
										onClick={() => handleDropDownItemClick({ name, item })}
										key={index}
									>
										{item}
									</DropDownItems>
								</DropDown>
							))}
					</CleverDropDown>
				</InputContainer>
			)}

			{type && type === 'carousel-button' && (
				<InputContainer>
					<CarouselButtonLabel>{label} </CarouselButtonLabel>
					<CarouselButtonWrapper>
						<Pointer pointer='left' />
						{items &&
							items.map((item: string, index: number) => (
								<>
									<CarouselButton key={index}>{item}</CarouselButton>
								</>
							))}
						<Pointer pointer='right' />
					</CarouselButtonWrapper>
				</InputContainer>
			)}
		</>
	);
};

export default CleverSelect;

interface IDropDownItemsProps {
	orientation: CleverSelectProps['orientation'];
}

interface CarouselButtonWrapperProps {
	pointer?: string;
}

export const CarouselButtonWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	line-height: 40px;

	padding: 1.5rem;
	border: 0.5px solid #757575;
	button:last-of-type {
		border-right: 0.5px solid #757575;
	}

	/* box-sizing: border-box; */

	/* border-right: none; */
`;

export const CarouselButtonLabel = styled.label`
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: flex-start;
	outline: none;
	border: none;
	padding: 0.2rem 0.6rem 0.2rem 0.6rem;
	background-color: #fff;
	z-index: 1;
	transform: translate(2rem, -0.8rem);
	&:hover {
		cursor: text;
	}
`;

export const Pointer = styled.div<CarouselButtonWrapperProps>`
	border-color: #757575;
	border-style: solid;
	border-width: 0.5px 0.5px 0 0;
	width: 16px;
	height: 16px;
	transform: ${(props) =>
		props.pointer === 'left' ? 'rotate(-134deg)' : 'rotate(45deg)'};
`;

const CarouselButtonAnimation = keyframes`
 0% { 	border-color: #757575;}
 100% { 		background-color: #5cd176;
		color: #fff;
		border: none;
		transform: scale(1.2);
		z-index: 100;
 }`;

export const CarouselButton = styled.button`
	position: relative;
	flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1;
	line-height: 40px;
	border-color: #757575;
	border-style: solid;
	border-width: 0.5px 0 0.5px 0.5px;
	background: none;
	position: relative;
	/* button:last-of-type {
		border-right: 0.5px solid #757575;
	} */

	&:hover {
		background-color: #5cd176;
		color: #fff;
		border: none;
		transform: scale(1.1);
		z-index: 100;

		animation-name: ${CarouselButtonAnimation};

		/* padding: 4px; */
		/* transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01); */
	}
	/* &:hover + button:last-of-type {
		border: 2px solid #5cd176;
	} */
	box-sizing: border-box;
	animation-duration: 0.6s;
	animation-direction: normal;
	animation-timing-function: cubic-bezier(0.23, 0, 0, 1.01);
	animation-fill-mode: forwards;
	/* transition: padding 0.6s cubic-bezier(0.23, 0, 0, 1.01);
	transition: transform 0.6s cubic-bezier(0.23, 0, 0, 1.01); */
`;

export const CleverDropDown = styled.div`
	width: 100%;
	border: solid 0.1px #585858;
	border-top: none;
	box-sizing: border-box;
`;

export const DropDown = styled.div`
	display: flex;
	align-items: center;
	background-color: #f5f5f5;
	padding-left: 1rem;
	input {
		margin: 0;
	}

	:hover {
		background-color: #f3f3f3;
	}
	display: flex;
`;

export const DropDownItems = styled.div<IDropDownItemsProps>`
	display: flex;
	line-height: 40px;
	/* border-bottom: solid 0.1px #585858; */
	padding-left: 0.5rem;
	box-sizing: border-box;
	font-size: small;
	font-weight: 400;
	cursor: pointer;
	/* background-color: red; */
	width: 100%;
	display: flex;
	flex-direction: ${({ orientation }) =>
		orientation === 'vertical' ? `row` : `column`};
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

const inactive_input = css`
	background-color: none;
	font-size: medium;
`;

const active_input = css`
	font-size: small;
	font-weight: 700;
	background-color: #fff;
	/* transform: translate(.8rem, .6rem); */
`;

const getLabelStyles = ({ is_input_active }: any): any => {
	if (is_input_active) return active_input;
	if (!is_input_active) return inactive_input;
};
export const Label = styled.label<LabelProps>`
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: flex-start;
	outline: none;
	border: none;
	padding: 0.2rem 0.6rem 0.2rem 0.6rem;
	z-index: 1;
	transform: ${({ is_input_active }) =>
		is_input_active ? `translate(.8rem, -.7rem)` : `translate(1rem, .7rem)`};
	transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
	&:hover {
		cursor: text;
	}
	${getLabelStyles}
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	/* flex-basis: 1 1 50%; */
	margin: 0 1rem 1rem 0;
	
`;
