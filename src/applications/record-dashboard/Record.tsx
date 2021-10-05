import { useContext } from "react";

import { DashboardWrapper } from "../../global-components/dashboard/components/styles";
import { MainContainer, MenuItems } from "./components";
import { RecordContext } from "./RecordProvider";

import { RightSideBar } from "../../global-components/dashboard/components";

const Record = () => {
  const { display_right_side_bar } = useContext(RecordContext);
  return (
    <DashboardWrapper className="dashboard-wrapper">
      <MenuItems className="menu-items" />
      <MainContainer className="main-container" />
      {display_right_side_bar && <RightSideBar />}
    </DashboardWrapper>
  );
};

export default Record;
