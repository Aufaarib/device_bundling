import { useNavigate } from "react-router-dom";
import ProductCard from "../shared/ProductCard";
import { useAppContext } from "../shared/Context";
import { useEffect, useState } from "react";
import { getAllProducts } from "../APIs/ProductsAPI";
import moment from "moment";

const LatestProducts = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useAppContext();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);

  const fetchAllProducts = () => {
    getAllProducts(setData, setIsLoading);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "35px",
        padding: "36px 100px",
      }}
    >
      <h3 style={{ color: "black", fontSize: "30px" }}>Latest Products</h3>
      <div
        style={{
          display: "flex",
          gap: "42px",
          // backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        {data.slice(0, 4).map((val, index) => (
          <div key={index}>
            <ProductCard
              product_id={val.product_id}
              product_name={val.name}
              product_color={
                val.variants[0]?.attributes?.find(
                  (attr) => attr.attribute_label === "Warna"
                )?.option_label
              }
              product_stock={val.variants[0]?.stock}
              normal_price={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(val.variants[0]?.price)}
              special_price={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(val.variants[0]?.special_price)}
              discount={val.variants[0]?.discount}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/products")}
          style={{
            color: "#ED0226",
            border: "1px solid #ED0226",
            backgroundColor: "white",
            width: "218px",
            fontSize: "16px",
            fontWeight: 700,
            padding: "16px 54px",
            borderRadius: "62px",
            cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default LatestProducts;
