import { IconMessage, IconShare } from "@tabler/icons-react";

const ProductFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F6F3F3",
        padding: "20px 80px",
        boxShadow: "2px 0px 10px 0px #9E9E9E8F",
        borderRadius: "30px 30px 0 0",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "2px solid red",
            padding: "5px",
            width: "120px",
            justifyContent: "center",
            gap: "7px",
            borderRadius: "50px",
            alignItems: "center",
          }}
        >
          <IconMessage color="red" />
          <p style={{ color: "#FF0025" }}>Chat</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "2px solid red",
            padding: "5px",
            width: "120px",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
            borderRadius: "50px",
          }}
        >
          <IconShare color="red" />
          <p style={{ color: "#FF0025" }}>Share</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "2px solid red",
          padding: "10px",
          width: "450px",
          justifyContent: "center",
          gap: "7px",
          borderRadius: "50px",
          backgroundColor: "#ED0226",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>Buy Now</p>
      </div>
    </div>
  );
};

export default ProductFooter;
