import { useState, useEffect, useRef } from 'react';

import styled, { css } from 'styled-components';
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
	current_step: any;
	type?: string;
}
const CleverKeywordSelector: React.FC<any> = (props) => {
	const { value, placeholder, label, actions, name, current_step, subtitle } =
		props;
	const [is_input_active, setInputActive] = useState(false);
	const [is_label_click, setLabelClick] = useState(false);

	interface IKeywordTerms {}

	const [keywordTerm, setKeywordTerm] = useState('');
	const [keywordList, appendToKeywordsList] = useState<any[]>([]);

	const handleKeywordInput = (event: any) => {
		event.preventDefault();
		appendToKeywordsList((keywordList: IKeywordTerms[]) => {
			return [...keywordList, keywordTerm];
		});
		actions.handleChange(keywordTerm);
		setKeywordTerm('');
	};

	console.log('HANDLEINPUT KEYWORD EVENT:', keywordTerm);
	console.log('HANDLESUNMIT KEYWORD EVENT:', keywordList);

	const handleInput = (event: any) => {
		const { value } = event.target;
		// console.log('HANDLE KEYWORD EVENT:', value);
		event.preventDefault();
		setKeywordTerm(value);
	};

	const handleLabelClick = () => {
		setLabelClick(() => {
			return true;
		});
	};

	const inputRef = useRef<any>();
	useEffect(() => {
		if (is_label_click === true) {
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

	const handleRemoveKeyword = (keyword: string) =>
		appendToKeywordsList(() => keywordList.filter((item) => item !== keyword));

	return (
		<>
			<InputContainer>
				<Label is_input_active={is_input_active} onClick={handleLabelClick}>
					{label}
				</Label>
				<StyledForm action='' onSubmit={handleKeywordInput}>
					<Input
						type='text'
						value={keywordTerm}
						placeholder={is_input_active ? placeholder : ''}
						onChange={handleInput}
						onFocus={() => setInputActive(true)}
						onClick={() => setInputActive(true)}
						onBlur={handleBlurInput}
						ref={inputRef}
						name={name}
					/>
				</StyledForm>
				{keywordList && (
					<KeywordsContainer>
						{keywordList &&
							keywordList.map((keyword: string, index: number) => (
								<PillBoxes>
									<div>{keyword}</div>{' '}
									<div>
										<RemoveKeyword>
											<h3 onClick={() => handleRemoveKeyword(keyword)}>+</h3>
										</RemoveKeyword>
									</div>{' '}
								</PillBoxes>
							))}
					</KeywordsContainer>
				)}
			</InputContainer>
		</>
	);
};

export default CleverKeywordSelector;

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
interface TextAreaProps {}
export const TextArea = styled.textarea<TextAreaProps>`
	width: 100%;
	/* background-color: #ebebeb; */
	height: 200px;
	/* border: none; */
	outline-color: #5cd176;
	padding: 1.4rem;
	margin: 0;
	max-width: 100%;
	box-sizing: border-box;
	resize: none;
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
`;

const getLabelStyles = ({ is_input_active }: any): any => {
	if (is_input_active) return active_input;
	if (!is_input_active) return inactive_input;
};
export const Label = styled.label<LabelProps>`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	outline: none;
	border: none;
	padding: 0.2rem 0.6rem 0.2rem 0.6rem;
	margin: 0;
	z-index: 1;
	transform: ${({ is_input_active }) =>
		is_input_active ? `translate(.8rem, -.7rem)` : `translate(1rem, .7rem)`};
	transition: transform 0.4s cubic-bezier(0.23, 0, 0, 1.01);
	&:hover {
		cursor: text;
	}
	box-sizing: border-box;
	font-size: small;
	${getLabelStyles}
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	/* flex-basis: 1 1 50%; */
	/* margin: 0 1rem 1rem 0; */
	/* background-color: green; */
`;

export const KeywordsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	min-height: 40px;
	flex-wrap: wrap;

	border: 0.5px solid gray;
	border-top: none;
	box-sizing: border-box;
	outline-color: #5cd176;
	background: #fff;
	max-height: 220px;
	overflow-y: scroll;
`;

export const PillBoxes = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	box-sizing: border-box;
	height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0 1rem 0 1rem;
	border-radius: 4px;
	margin: 0.2rem;
	flex-basis: 1;
	flex-grow: 1;
	/* flex-shrink: 1; */
	max-width: 14rem;
	min-width: 8px;
	background-color: #80ca90;
	/* border: 2px solid #5cd176; */
	color: #fff;
	box-sizing: border-box;

	div {
		flex-basis: 1;
		flex-grow: 1;
		flex-shrink: 1;
	}

	div:last-of-type {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

export const StyledForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	box-sizing: border-box;
	/* flex-basis: 1 1 50%; */
	/* margin: 0 1rem 1rem 0; */
	/* background-color: green; */
`;

export const RemoveKeyword = styled.div`
	height: 20px;
	width: 20px;
	align-self: flex-start;
	h3 {
		transform: rotate(45deg);
		/* transform-origin: 50% 50%; */
		width: 20px;
		height: 20px;
		margin: 0;
		font-size: larger;
		cursor: pointer;
	}
`;
