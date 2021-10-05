import React, { useContext } from "react";
import { RecordContext } from "../RecordProvider";
import { useSelector, useActor } from "@xstate/react";
import { ActorRef } from "xstate";
import { CleverTabs } from "../../../global-components";
import { Main } from "../../../global-components";
import { Idata } from "../types";
import * as Components from "../../../atomic";

import styled from "styled-components";

const MainContainer: React.FC<any> = () => {
  const record_context = useContext(RecordContext);
  const { recordService } = record_context;

  const selector = ({ context }: any) => {
    console.log("IM RUNNING", context);
    const { active_tab, tabs } = context;
    return active_tab != null && tabs.length > 0;
  };

  const tab_data = useSelector(recordService, selector);

  const [{ context = {} }] = useActor<ActorRef<any, any>>(recordService);
  const { active_tab, tabs } = context;
  console.log("current_tab:", active_tab?.current?.application_id);

  const data: Idata = {
    tab_data,
    active_tab,
    tabs,
  };

  return (
    <Main className="main-container">
      <Container>
        <ToolbarSlot>
          <ToolbarWrapper className="toobar-wrapper">
            <StyledSearch />
            <Upgrade>UPGRADE</Upgrade>
            <Add>+</Add>
            <Add>+</Add>
          </ToolbarWrapper>
        </ToolbarSlot>
        <CleverTabs data={data} component={Components} />
        {/* <Footer>Architected, designed and developed by Eugene Peter Maestrado</Footer> */}
      </Container>
    </Main>
  );
};

export default MainContainer;

export const ToolbarSlot = styled.div`
  display: flex;
  width: 100%;
  /* padding: 0 1rem 0 1rem; */
  position: relative;
  box-sizing: border-box;
  margin-bottom: 1rem;
  /* background-color: #b9b9b9; */
  height: 100px;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  margin-top: 1rem;
  padding: 0 1rem 0 1rem;
  position: relative;
  box-sizing: border-box;
  button:last-of-type {
    margin-right: 0 !important;
  }
`;

export const StyledSearch = styled.input`
  height: 40px;
  width: 100%;
  /* margin: 1rem 0 4rem 0; */
  margin-right: 1rem;
  padding-left: 1.4rem;
  box-sizing: border-box;
  outline: none;
  border: none;
  box-shadow: 0px 13px 20px -12px rgb(131 167 168 / 40%);
`;
export const Container = styled.div`
  max-height: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  height: 100vh;
  /* overflow: scroll; */
`;

export const Footer = styled.div`
  line-height: 40px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 1rem 1rem 1rem;
  position: absolute;
  width: 100%;
  bottom: 0;
  /* align-self: flex-end!important; */
  /* overflow: scroll; */
`;

export const Upgrade = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  background-color: #f7da5e;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Add = styled.button`
  height: 38px;
  width: 46px;
  border: none;
  background-color: #04eb98;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  border-radius: 25px;
  margin-right: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
`;
