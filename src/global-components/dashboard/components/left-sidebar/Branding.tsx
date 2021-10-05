import { ReactComponent as Logo } from "../../assets/Vector 1workable-logo.svg";
import styled from "styled-components";

const Branding = () => {
  return (
    <StyledBranding>
      <Logo />
      <h4>Workable</h4>
    </StyledBranding>
  );
};

export default Branding;

export const StyledBranding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  width: 160px;
  box-sizing: border-box;

  h1,
  h2,
  h3,
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }
`;
