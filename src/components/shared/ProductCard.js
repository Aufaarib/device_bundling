import { useNavigate } from "react-router-dom";
import iphone from "../../styles/assets/iphone.png";

const ProductCard = ({
  product_id,
  product_name,
  product_color,
  product_stock,
  normal_price,
  special_price,
  discount,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product-detail?id=${product_id}`)}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F1F1F4",
        width: "330px",
        minHeight: "315px",
        borderRadius: "26px",
        cursor: "pointer",
        justifyContent: "start",
        // backgroundColor: "red",
      }}
    >
      <p
        style={{
          color: "white",
          background: "linear-gradient(90deg, #ED0226 47.67%, #FDA22B 100%)",
          width: "66px",
          height: "24px",
          borderRadius: "26px 0px 26px 0px",
          //   padding: "8px",
          fontSize: "10px",
          fontWeight: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Sisa {product_stock}
      </p>
      <div
        style={{
          display: "flex",
          minHeight: "270px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          padding: "30px 28px",
          // minHeight: "200px",
          // backgroundColor: "green",
        }}
      >
        <p
          style={{
            color: "black",
            textAlign: "center",
            textOverflow: "ellipsis",
            // backgroundColor: "red",
          }}
        >
          {product_name}, {product_color}
        </p>
        <img
          style={{ margin: 0, top: 0 }}
          src={iphone}
          alt="err"
          width="104px"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginLeft: "72px",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#001A4166", textDecoration: "line-through" }}>
              {normal_price}
            </p>
            <p
              style={{
                color: "#FF3333",
                backgroundColor: "#FF33331A",
                padding: "6px 14px",
                borderRadius: "62px",
                fontSize: "12px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              -{discount}%
            </p>
          </div>
          <p style={{ color: "black" }}>{special_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
