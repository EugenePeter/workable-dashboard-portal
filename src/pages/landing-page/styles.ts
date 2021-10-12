import styled, { createGlobalStyle } from "styled-components";

export const Modifiers = createGlobalStyle`
    .text-decorations {
        text-decoration: none;
        :active {
            text-decoration: none;
        }
    }

  .full-with {
      width: 100%!important;
  }

  .narrower-width {
    width: 80%;
  }
    .padding-left {
      padding-left: .4rem;

      @media screen and (min-width: 993px) {
        padding-left: 2rem;
    }
  }

  .align--left {
    text-align: left;
  }

  .padding-right {
    padding-right: 2rem;
  }
  .padding-top {
    padding-top: 2rem;
  }
  .padding-bottom {
    padding-bottom: 2rem;
  }
  .padding-all-sides {
    padding: 2rem;
  }

  .margin-right {
    margin-right: .6rem;
  }

  .margin-left {
    margin-left: .6rem;
  }

  .margin-top {
    margin-top: 4rem!important;
  }

  .margin-bottom {
    margin-bottom: 1.4rem!important;
  }

  .margin-remove {
    margin: 0!important;
  }

  .position-fixed {
    position: fixed!important;
    background-color:#F1EFFF;
    width: 100%;
    bottom: 0;
    margin: 10px;
    padding: 1rem;
    box-sizing: border-box;
  }

  .width--narrower {
    width: 80%!important;
  }
  
  .modal-is-open {
    display: flex;
  }

  .modal-is-close {
    display: none;
  }

  .letter-spaced {
    letter-spacing: .4rem!important;

      @media screen and (min-width: 992px) {
        letter-spacing: .2rem;
    }
  }

  .letter-spaced--wider {
    letter-spacing: 1rem!important;
    text-indent: 1rem !important;

      @media screen and (min-width: 992px) {
        letter-spacing: .2rem;
    }
  }

  .condense {
    font-family: 'Barlow Semi Condensed', sans-serif!important;
  }

  .bg--main-color {
    background-color: #FF0058;
  }

  .bg--bg-color {
     background-color: #FBFDFF;
  }

  .text-color--gray {
    color: #C5C5C5;
  }

  .font-weight--bold {
    font-weight: 800;
  }
    
`;

export const SignInSignUpSlot = styled.div`
  width: 96%;
  @media screen and (min-width: 992px) {
    width: 30% !important;
  }
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  /* @media screen and (min-width: 375px) {
    width: 90%;
  } */
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  /* background-color: #b4b6b4; */
  background-image: url("https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80%201374w") !important;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; ;
`;

export const ContainerNarrow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 92%;
  margin: 0 auto;
  /* background-color: violet; */

  @media screen and (min-width: 1080px) {
    max-width: 60.58rem !important;
    /* background-color: violet; */
  }

  @media screen and (min-width: 992px) {
    max-width: 48rem;
    /* background-color: violet; */
  }
`;

export const ContainerNarrower = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;

  @media screen and (min-width: 992px) {
    max-width: 50rem;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  align-self: flex-end;
  cursor: pointer;

  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-sizing: border-box;
`;

export const HeroMainButton = styled.button`
  width: 100%;
  /* height: 60px; */
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;

  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer !important;
  display: "inline-block";

  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: #00d88c;
  border-radius: 8px;
  height: 4.4rem !important;

  box-sizing: border-box;
`;

export const HeroColumns = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch !important;
  width: 100%;
  height: 100%;
  overflow: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
  /* background-color: pink; */
`;

export const HeroRow = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 500px; */
  /* background-color: red; */
  margin-top: 4%;

  h2,
  p {
    text-align: center;
    margin: 0;
  }

  small {
    display: inline-block;
    width: 100px;
    margin: 10px;
    padding: 10px;
    background-color: green;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  height: 100%;
  font-family: "Roboto", sans-serif;

  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  height: 100%;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  width: 100%;
  color: white;
  /* background-color: green; */
`;
export const Title = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  h1 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    margin: 0;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 0;
    text-align: center;
  }

  @media screen and (min-width: 992px) {
    max-width: 70rem;
    h1 {
      margin: 0;
      font-size: 6rem;
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Roboto Condensed", sans-serif;
      margin: 0;
    }

    h3 {
      font-weight: 400;
      margin-top: 0;
    }
  }
`;

export const SubTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    margin-top: -0.5rem;
    margin-bottom: 0;
    text-indent: 2rem !important;
  }

  h2 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    margin: 0;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    max-width: 70rem;

    h1 {
      font-size: 4.8rem;
      font-weight: 600;
      text-transform: uppercase;
      font-family: "Roboto Condensed", sans-serif;
      margin-top: -1rem;
      margin-bottom: 0;
      text-indent: 2rem !important;
    }

    h2 {
      margin: 0;
      font-size: 2.4rem;
      font-weight: 300;
      text-transform: uppercase;
      font-family: "Roboto Condensed", sans-serif;
      margin: 0;
    }

    h3 {
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 86%;
  height: 100%;

  h1 {
    font-size: 3.6rem;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
  }

  @media screen and (min-width: 992px) {
    width: 70%;
    h1 {
      font-size: 3rem;
    }
  }

  /* background-color: red; */
`;
