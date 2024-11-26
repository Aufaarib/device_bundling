import { Box, Typography } from "@mui/material";
import BreadCrumbsButton from "../shared/Buttons/BreadCrumbs";
import ProductFooter from "../shared/ProductFooter";
import FilterBar from "./FilterBar";
import Table from "./Table";
import BreadCrumbs from "../shared/BreadCrumbs";

const Products = () => {
  const breadcrumbs = [
    <BreadCrumbsButton title={"Home"} href={"/"} />,
    <Typography fontSize="16px" key="3" color="#00000099" fontWeight={600}>
      Products
    </Typography>,
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // padding: "60px",
        // justifyContent: "space-between",
        // gap: "5px",
        // paddingBottom: "50px",
      }}
    >
      <BreadCrumbs breadCrumbs={breadcrumbs} />
      <Box
        sx={{
          paddingX: "60px",
          display: "flex",
          flexDirection: "row",
          gap: "35px",
          paddingBottom: "50px",
        }}
      >
        <FilterBar />
        <Table />
      </Box>
    </div>
  );
};

export default Products;
