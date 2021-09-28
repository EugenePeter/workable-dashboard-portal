import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSignIn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #ffffff;
	width: 100%;
	/* height: 600px; */
	box-sizing: border-box;
	padding-bottom: 1rem;
	border-radius: 6px;
`;

export const SignInWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 80%;
`;

export const StyledLink = styled(Link)`
	color: #80ca90;
`;
