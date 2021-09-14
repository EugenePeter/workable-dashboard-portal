import styled from 'styled-components';

export const Container = styled.div`
	/* background: pink; */
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 40px);
	/* margin: 0 2rem 0 2rem; */
`;

export const Wrapper = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	/* margin: 2rem; */
`;

export const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #f4f4f4;
	width: 100%;
	flex-basis: 1;
	flex-grow: 0.5;
	flex-shrink: 1;
	/* height: 10rem; */
`;
export const Body = styled.div`
	display: flex;
	align-items: center;
	/* background-color: #fff; */
	flex-basis: 1;
	flex-grow: 2;
	flex-shrink: 1;
	margin-bottom: 2px;
`;

export const LeftPanel = styled.div`
	display: flex;
	flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1;
	/* background-color: lightblue; */
	height: 100%;
`;

export const MainPanel = styled.div`
	/* display: flex; */
	position: relative;
	flex-basis: 1;
	flex-grow: 4;
	flex-shrink: 1;
	/* background-color: #dfdfdf; */
	height: 100%;
	box-sizing: border-box;
	/* width: 100%; */
`;

export const BottomToolbar = styled.div`
	background-color: #f4f4f4;
	flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1;
	margin-bottom: 2px;
`;
