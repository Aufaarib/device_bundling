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
        <p style={{ color: "black", padding: "2px 56px", paddingTop: "22px" }}>
          {"Home > Product > iPhone 15 Hitam"}
        </p>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
