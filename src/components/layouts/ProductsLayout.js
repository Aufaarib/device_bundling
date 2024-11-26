import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const ProductsLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        // backgroundColor: "yellow",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
