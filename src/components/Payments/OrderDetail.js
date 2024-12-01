import { Typography } from "@mui/material";
import BreadCrumbs from "../shared/BreadCrumbs";
import BreadCrumbsButton from "../shared/Buttons/BreadCrumbs";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import iphone from "../../styles/assets/iphone.png";
import { useEffect, useState } from "react";

const BundlingItems = ({ title, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p
        style={{
          color: "#000000",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        {title}
      </p>
      <p
        style={{
          color: "#313131",
          fontSize: "18px",
          fontWeight: 400,
        }}
      >
        {value}
      </p>
    </div>
  );
};

const OrderDetail = () => {
  const navigate = useNavigate();
  const [pickedVariantsIndex, setVariantsPickedIndex] = useState({
    id: 0,
    prod_name: "",
    brand: "",
    color: "",
    capacity: "",
    stock: 0,
    original_price: 0,
    discount_price: 0,
    discount: 0,
    warranty: "",
  });

  console.log(pickedVariantsIndex);

  useEffect(() => {
    setVariantsPickedIndex(JSON.parse(localStorage.getItem("selectedProduct")));
  }, []);

  const breadcrumbs = [
    <BreadCrumbsButton title={"Home"} href={"/"} />,
    <BreadCrumbsButton title={"Products"} href={"/products"} />,
    <BreadCrumbsButton
      title={pickedVariantsIndex.prod_name}
      href={`/product-detail?id=${pickedVariantsIndex.id}`}
    />,
    <BreadCrumbsButton
      title={"Metode Pembayaran"}
      href={"/payments/payment-method"}
    />,
    <Typography fontSize="16px" key="3" color="#00000099" fontWeight={600}>
      Detail Pesanan
    </Typography>,
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // gap: "10px",
      }}
    >
      <BreadCrumbs breadCrumbs={breadcrumbs} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "75px",
          paddingRight: "75px",
          gap: "20px",
        }}
      >
        <h1 style={{ color: "#313131", fontSize: "30px", fontWeight: 700 }}>
          Cek Lagi Pesananmu
        </h1>
        <p style={{ fontWeight: 400, fontSize: "18px", color: "#313131" }}>
          Cek lagi pesananmu yuk sebelum konfirmasi!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "1px, solid lightgray",
              width: "50%",
              justifyContent: "start",
              alignItems: "center",
              padding: "70px 80px",
              gap: "60px",
              borderRadius: "20px",
            }}
          >
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="155px"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "black",
              }}
            >
              <p
                style={{ color: "#000000", fontSize: "22px", fontWeight: 500 }}
              >
                {pickedVariantsIndex.brand}
              </p>
              <p
                style={{ color: "#000000", fontSize: "18px", fontWeight: 400 }}
              >
                {pickedVariantsIndex.prod_name}
              </p>
              <p
                style={{ color: "#313131", fontSize: "18px", fontWeight: 400 }}
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(pickedVariantsIndex?.discount_price)}
              </p>
              <p
                style={{ color: "#313131", fontSize: "18px", fontWeight: 400 }}
              >
                {pickedVariantsIndex.color}
              </p>
              <p
                style={{ color: "#313131", fontSize: "18px", fontWeight: 400 }}
              >
                {pickedVariantsIndex.capacity}
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px, solid lightgray",
              width: "50%",
              padding: "20px",
              gap: "15px",
              borderRadius: "20px",
            }}
          >
            <p
              style={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Paket Bundling
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
              <BundlingItems title="Nomor" value="081380897666" />
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            border: "1px solid lightgray",
            padding: "20px 30px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center", // Note the corrected spelling from "alignItem" to "alignItems"
            gap: "10px",
            cursor: "pointer",
            outline: "none", // Remove outline for better appearance (optional)
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p
              style={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Metode Pembayaran
            </p>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 6V19C28 19.5304 27.7893 20.0391 27.4142 20.4142C27.0391 20.7893 26.5304 21 26 21H12.4137L13.7075 22.2925C13.8004 22.3854 13.8741 22.4957 13.9244 22.6171C13.9747 22.7385 14.0006 22.8686 14.0006 23C14.0006 23.1314 13.9747 23.2615 13.9244 23.3829C13.8741 23.5043 13.8004 23.6146 13.7075 23.7075C13.6146 23.8004 13.5043 23.8741 13.3829 23.9244C13.2615 23.9747 13.1314 24.0006 13 24.0006C12.8686 24.0006 12.7385 23.9747 12.6171 23.9244C12.4957 23.8741 12.3854 23.8004 12.2925 23.7075L9.2925 20.7075C9.19952 20.6146 9.12576 20.5043 9.07544 20.3829C9.02512 20.2615 8.99921 20.1314 8.99921 20C8.99921 19.8686 9.02512 19.7385 9.07544 19.6171C9.12576 19.4957 9.19952 19.3854 9.2925 19.2925L12.2925 16.2925C12.4801 16.1049 12.7346 15.9994 13 15.9994C13.2654 15.9994 13.5199 16.1049 13.7075 16.2925C13.8951 16.4801 14.0006 16.7346 14.0006 17C14.0006 17.2654 13.8951 17.5199 13.7075 17.7075L12.4137 19H26V6H12V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4H26C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6ZM21 24C20.7348 24 20.4804 24.1054 20.2929 24.2929C20.1054 24.4804 20 24.7348 20 25V26H6V13H19.5863L18.2925 14.2925C18.1049 14.4801 17.9994 14.7346 17.9994 15C17.9994 15.2654 18.1049 15.5199 18.2925 15.7075C18.4801 15.8951 18.7346 16.0006 19 16.0006C19.2654 16.0006 19.5199 15.8951 19.7075 15.7075L22.7075 12.7075C22.8005 12.6146 22.8742 12.5043 22.9246 12.3829C22.9749 12.2615 23.0008 12.1314 23.0008 12C23.0008 11.8686 22.9749 11.7385 22.9246 11.6171C22.8742 11.4957 22.8005 11.3854 22.7075 11.2925L19.7075 8.2925C19.5199 8.10486 19.2654 7.99944 19 7.99944C18.7346 7.99944 18.4801 8.10486 18.2925 8.2925C18.1049 8.48014 17.9994 8.73464 17.9994 9C17.9994 9.26536 18.1049 9.51986 18.2925 9.7075L19.5863 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V26C4 26.5304 4.21071 27.0391 4.58579 27.4142C4.96086 27.7893 5.46957 28 6 28H20C20.5304 28 21.0391 27.7893 21.4142 27.4142C21.7893 27.0391 22 26.5304 22 26V25C22 24.7348 21.8946 24.4804 21.7071 24.2929C21.5196 24.1054 21.2652 24 21 24Z"
                fill="#243B7F"
              />
            </svg>
          </div>
          <svg
            width="94"
            height="31"
            viewBox="0 0 94 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              y="0.5"
              width="93.75"
              height="30"
              fill="url(#pattern0_786_3065)"
            />
            <defs>
              <pattern
                id="pattern0_786_3065"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use href="#image0_786_3065" transform="scale(0.002 0.00625)" />
              </pattern>
              <image
                id="image0_786_3065"
                width="500"
                height="160"
                href="data:image/png;base64,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3OZFCbxY7BB4X8ixLt+9YNUrE1bXx4x+dsSoBycHS5dPlje8bcOGDcz2lr+J+UsSIAESIIG3GIGNz23efN5xq8uHjf5w1eq/rVo1Omb1mVGIu1FvSL94v93zIu6jVv1kzOhXD1l9Zsyq786H+oHIlj84vmtg07dLpV9+i7UHT5cESIAESIAEeiPwjQ0bfum7+7a988i+bSoKgw8cM+ozI0Y9VjXqB2NGnXTibtSbIvBdl0a9OWL1j6tGLVeNfnbUqEcnQvWp+aGBa4aHtm45tPvC83s7E+5NAiRAAiRAAiSwQgDC+j/m4s3IQDcb6iuPW3Vg2gT3jBr9parV3xi16qmq1c+NYXIYo49Xja5VjYoa5fKo1VNjRh8asep7I1b9J1LTVq16aCoM/mTeBDdOWV153m4tj+4N3vXs1q2/svLHXCEBEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiCBc4nA/wPqrnrdWqekOAAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
          <p style={{ color: "black" }}>
            Dapatkan cicilan dengan biaya yang terjangkau. Persentase biaya per
            hari hanya 0,1%. Mudah dan cepat, pinjaman sesuai dengan kebutuhan
            Anda.
          </p>
        </div>

        <div
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            border: "1px solid lightgray",
            padding: "20px 30px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center", // Note the corrected spelling from "alignItem" to "alignItems"
            gap: "10px",
            cursor: "pointer",
            outline: "none", // Remove outline for better appearance (optional)
          }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Detail Pembayaran
          </p>
          <BundlingItems
            title={"Total Pembayaran"}
            value={new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(pickedVariantsIndex?.discount_price)}
          />
          <BundlingItems
            title={"Estimasi Pemotongan Harian"}
            value={"Rp239.990"}
          />
        </div>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/payments/order-detail")}
          style={{
            width: "278px",
            backgroundColor: "#002D72",
            borderRadius: "36px",
          }}
        >
          <p style={{ fontWeight: 500, fontSize: "17px" }}>LANJUTKAN</p>
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
