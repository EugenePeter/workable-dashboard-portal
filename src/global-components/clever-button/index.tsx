import styled, { css } from 'styled-components';

interface IButtons {
	btn_color?: string;
	full_width?: boolean;
	button_type: string;
}

export const cancelButton = css`
	background: none;
	border: 2px solid #ff9d7c;
	color: #ff9d7c;
	width: 160px;
`;
export const nextButton = css`
	background-color: #80ca90;
	width: 160px;
`;

export const backButton = css`
	background-color: #efc456;
	width: 160px;
`;

export const fullWidth = css`
	width: 100%;
`;

export const signin = css`
	width: 100%;
	background-color: #80ca90 !important;
`;

const getButtonStyles = ({ btn_color, full_width, button_type }: IButtons) => {
	if (btn_color === 'cancel') return cancelButton;
	if (btn_color === 'next') return nextButton;
	if (btn_color === 'back') return backButton;
	if (button_type === 'signin') return signin;
	if (full_width) return fullWidth;
};

export const Button = styled.button<IButtons>`
	/* line-height: 40px!important; */
	height: 40px;
	border: none;
	/* background-color: hotpink; */
	/* background-color: #80ca90; */
	color: #fff;
	cursor: pointer;
	border-radius: 4px;
	${getButtonStyles}
`;
