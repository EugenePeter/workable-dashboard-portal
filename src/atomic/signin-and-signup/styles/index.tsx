import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSignInSignUp = styled.div`
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

export const SignInSignUpWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;

  p {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #80ca90;
`;

// export const StyledForm = styled.form`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 100%;
//   box-sizing: border-box;
//   /* flex-basis: 1 1 50%; */
//   /* margin: 0 1rem 1rem 0; */
//   /* background-color: green; */
// `;
