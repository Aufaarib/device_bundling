import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const PaymentsLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        minHeight: "100vh",
        maxWidth: "100%",
        paddingBottom: "30px",
        // backgroundColor: "yellow",
      }}
    >
      <Header />
      <br />
      <Outlet />
    </div>
  );
};

export default PaymentsLayout;
