import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import PlatformOffering from "../shared/PlatformOfferings";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        // backgroundColor: "red",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
