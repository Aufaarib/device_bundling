import ProductFooter from "../shared/ProductFooter";
import FilterBar from "./FilterBar";
import Table from "./Table";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "60px",
        // justifyContent: "space-between",
        gap: "35px",
        paddingBottom: "50px",
      }}
    >
      <FilterBar />
      <Table />
    </div>
  );
};

export default Products;
