import React, { useContext } from "react";
import { LeftSideBarWrapper } from "../styles";
import { Sender } from "xstate";
import styled from "styled-components";

import Branding from "./Branding";

import { ProtectedRoutesActions } from "../../../../protected-routes/ProtectedRoutesProvider";

export interface LeftSideBarProps {
  menus: [];
  send: Sender<any>;
  active_tab: any;
}

const LeftSideBar: React.FC<LeftSideBarProps> = (props) => {
  const { menus, send, active_tab } = props;
  const { application_id } = active_tab;
  const { setAuthenticated } = useContext(ProtectedRoutesActions);

  const handleMenuItemClicked = (menu_item: any) => {
    send({
      type: "OPEN_TAB",
      payload: menu_item,
    });
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <LeftSideBarWrapper className="left-side-bar-wrapper">
      <Branding />
      {menus &&
        menus.map((item: any, index: any) => (
          <StyledMenu
            key={item.application_id}
            onClick={() => handleMenuItemClicked(item)}
            application_id={application_id}
            className="left-menus"
          >
            {item.application_name}
          </StyledMenu>
        ))}
      <h3 style={{ marginLeft: "1.2rem", cursor: "pointer" }} onClick={handleLogout}>
        SIGN OUT
      </h3>
    </LeftSideBarWrapper>
  );
};

export default LeftSideBar;

export interface IStyledMenu {
  application_id: string;
}
export const StyledMenu = styled.div<IStyledMenu>`
  line-height: 2rem;
  color: ${({ key, application_id }) => (key === application_id ? "blue" : "gray")};
  margin-left: 1.2rem;
`;
