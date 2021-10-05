import RecordProvider from "./RecordProvider";
import Record from "./Record";

const Dashboard = () => {
  return (
    <RecordProvider>
      <Record />
    </RecordProvider>
  );
};

export default Dashboard;
