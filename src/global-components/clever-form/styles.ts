import styled from 'styled-components';
interface StyledFormProps {
	orientation?: string;
}
export const StyledForm = styled.form<StyledFormProps>`
	width: 100%;
	/* border: 2px solid gray; */
	/* background-color: beige; */
	box-sizing: border-box;
	/* display: flex; */
	/* flex-direction: column;
	flex-wrap: wrap; */
`;
