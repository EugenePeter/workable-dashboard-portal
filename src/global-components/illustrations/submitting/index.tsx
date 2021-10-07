import { ReactComponent as Submit } from "../assets/undraw_Developer_activity_re_39tg.svg";
import styled from "styled-components";
import { Loader } from "../../../global-components";

const Submitting = () => {
  return (
    <StyledSubmit>
      <Loader />
      <p>saving vacancies</p>
      <Submit />
    </StyledSubmit>
  );
};

export default Submitting;

export const StyledSubmit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  width: 100%;
  box-sizing: border-box;
`;
