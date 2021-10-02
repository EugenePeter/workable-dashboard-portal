import styled, { createGlobalStyle, css } from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  //
  height: calc(100vh - (120px + 7rem));
  /* margin: 0 2rem 0 2rem; */
`;

export const VacanciesFormWrapper = styled.div`
  /* background: pink; */
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
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
  /* flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1; */
  background-color: #fff;
  height: 20%;
  padding-left: 4rem;
  box-sizing: border-box;
`;
export const Body = styled.div`
  display: flex;
  /* align-items: center; */
  /* border: solid 2px gray; */
  /* flex-basis: 1;
	flex-grow: 2; */
  height: 50%;
  flex-shrink: 1;
  margin-bottom: 2px;
`;

export const BottomToolbar = styled.div`
  background-color: #fff;
  /* flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1; */
  height: 30%;
  margin-bottom: 2px;
  display: flex;
`;

export const LeftPanel = styled.div`
  display: flex;
  /* flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1; */
  width: 30%;
  /* background-color: lightblue; */
  align-items: flex-start;
  height: 100%;
`;

export const MainPanel = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  /* flex-basis: 1;
	flex-grow: 1;
	flex-shrink: 1; */
  width: 70%;
  /* background-color: #dfdfdf; */
  height: 100%;
  box-sizing: border-box;
  /* width: 100%; */
`;

export const Columns = styled.div`
  /* border: solid 2px black; */
  display: flex;
  flex-basis: 1;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-end;
  /* background-color: #fff; */
`;

interface IButtons {
  btn_color?: string;
}

export const cancelButton = css`
  background: none;
  border: 2px solid #ff9d7c;
  color: #ff9d7c;
`;
export const nextButton = css`
  background-color: #80ca90;
`;

export const backButton = css`
  background-color: #efc456;
`;

const getButtonStyles = ({ btn_color }: IButtons) => {
  if (btn_color === "cancel") return cancelButton;
  if (btn_color === "next") return nextButton;
  if (btn_color === "back") return backButton;
};

export const Button = styled.button<IButtons>`
  width: 160px;
  /* line-height: 40px!important; */
  height: 40px;
  border: none;
  /* background-color: #80ca90; */
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  ${getButtonStyles}
`;

export const Back = styled.button`
  width: 200px;
  line-height: 40px;
  border: none;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
