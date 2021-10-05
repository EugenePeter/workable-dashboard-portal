import { createContext, useState } from "react";
import { useInterpret } from "@xstate/react";
import { spawn } from "./machine/record-machine";

export const RecordContext = createContext<any | null>(null);

const RecordProvider: React.FC<any> = (props) => {
  const { children } = props;
  const machine = spawn({});
  const recordService = useInterpret(machine);
  console.log("RECORD DASHBOARD PROVIDER SERVICE:", recordService);
  const [display_right_side_bar, setDisplayRightSideBar] = useState(false);

  return (
    <RecordContext.Provider value={{ recordService, display_right_side_bar, setDisplayRightSideBar }}>
      {children}
    </RecordContext.Provider>
  );
};

export default RecordProvider;
