import React from 'react';
import styled from 'styled-components';

const Container: React.FC<any> = (props) => {
	const { children } = props;
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 80vh;
	background-color: #b4b6b4;
`;
