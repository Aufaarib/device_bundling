import { Box, Button, Modal, Typography } from "@mui/material";
import { IconCircleFilled, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import iphone from "../../styles/assets/iphone.png";
import { getProductById } from "../APIs/ProductsAPI";
import BreadCrumbs from "../shared/BreadCrumbs";
import BreadCrumbsButton from "../shared/Buttons/BreadCrumbs";
import { useAppContext } from "../shared/Context";
import DottedPoints from "../shared/Pharagraphs/DottedPoints";
import Underlined from "../shared/Pharagraphs/Underlined";
import ProductFooter from "../shared/ProductFooter";

const ProductDetail = () => {
  const params = new URLSearchParams(window.location.search);
  const [data, setData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isLoading, setIsLoading } = useAppContext();
  const [selectedModel, setSelectedModel] = useState("");
  const [pickedVariantsIndex, setVariantsPickedIndex] = useState({
    id: 0,
    color: "",
    capacity: "",
    stock: 0,
    original_price: 0,
    discount_price: 0,
    discount: 0,
    warranty: "",
  });

  const Specs = ({ label, value }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          borderBottom: "1px solid lightgray",
          paddingBottom: "20px",
        }}
      >
        <p
          style={{
            width: "50%",
            color: "#4E5764",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {label}
        </p>
        <p
          style={{
            width: "50%",
            color: "#4E5764",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {value}
        </p>
      </div>
    );
  };

  // const uniqueVariants = Array.from(
  //   new Map(
  //     data?.variants?.map((val) => [
  //       val.attributes?.find((attr) => attr.attribute_label === "Model")
  //         ?.value || "",
  //       val,
  //     ])
  //   ).values()
  // );

  // const uniqueColor = Array.from(
  //   new Map(
  //     data?.variants
  //       ?.filter(
  //         (val) =>
  //           val.attributes?.find((attr) => attr.attribute_label === "Model")
  //             ?.value === selectedModel
  //       )
  //       .map((val) => [
  //         val.attributes?.find((attr) => attr.attribute_label === "Warna")
  //           ?.option_label || "",
  //         val,
  //       ])
  //   ).values()
  // );

  // const uniqueCapacity = Array.from(
  //   new Map(
  //     data?.variants
  //       ?.filter(
  //         (val) =>
  //           val.attributes?.find((attr) => attr.attribute_label === "Model")
  //             ?.value === selectedModel
  //       )
  //       .map((val) => [
  //         val.attributes?.find((attr) => attr.attribute_label === "Kapasitas")
  //           ?.value || "",
  //         val,
  //       ])
  //   ).values()
  // );

  useEffect(() => {
    getProductById(setData, params.get("id"), setIsLoading);
  }, []);
  // useEffect(() => {
  //   getProductById(setData, params.get("id"), setIsLoading);
  // }, []);

  useEffect(() => {
    // console.log("Data:", data);
    if (data?.variants?.length > 0) {
      setSelectedModel(data?.variants[0]?.model);
      setVariantsPickedIndex({
        id: data.variants[0].variant_id,
        color: data.variants[0]?.color || "",
        capacity: data.variants[0]?.capacity || "",
        stock: data.variants[0].stock || 0,
        original_price: data.variants[0].price || 0,
        discount_price: data.variants[0].special_price || 0,
        discount: data.variants[0].discount || 0,
        warranty: data.variants[0].warranty || "",
      });
    }
  }, [data]);

  console.log("pickedVariants", pickedVariantsIndex);
  console.log("pickedModel", selectedModel);
  // console.log("uniqeModel", uniqueVariants);
  // console.log("uniqeColor", uniqueColor);
  // console.log("uniqeCapacity", uniqueCapacity);

  const breadcrumbs = [
    <BreadCrumbsButton title={"Home"} href={"/"} />,
    <Button
      key="2"
      sx={{
        p: 0,
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 400,
        color: "#00000099",
        ":hover": { color: "blue" },
      }}
      href="/products"
    >
      Product
    </Button>,
    <Typography fontSize="16px" key="3" color="#00000099" fontWeight={600}>
      {data.name}
    </Typography>,
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BreadCrumbs breadCrumbs={breadcrumbs} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          minHeight: "100vh",
          padding: "0 56px",
          // backgroundColor: "yellow",
          // justifyContent: "space-between",
          gap: "25px",
        }}
      >
        <div style={{ width: "35%", color: "black" }}>
          <div
            style={{
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              borderRadius: "20px",
            }}
          >
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="188px"
            />
          </div>
          <div style={{ padding: "20px 30px", display: "flex", gap: "35px" }}>
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="90px"
            />
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="90px"
            />
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="90px"
            />
            <img
              style={{ margin: 0, top: 0 }}
              src={iphone}
              alt="err"
              width="90px"
            />
          </div>
        </div>
        <div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "100%",
              maxHeight: "212px",
              display: "flex",
              backgroundColor: "#F6F3F3",
              padding: "25px 30px",
              paddingRight: "18px",
              paddingBottom: "18px",
              borderRadius: "0px 0px 50px",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                // justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    textAlign: "center",
                    borderRadius: "6px",
                    color: "white",
                    backgroundColor: "#FDA22B",
                    maxWidth: "152px",
                    padding: "5px 9px",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  {pickedVariantsIndex?.stock} Units remaining
                </p>
                <IconCircleFilled size="6px" color="#4E5764" />
                <p
                  style={{
                    color: "#4E5764",
                    fontSize: "12px",
                    fontWeight: 400,
                  }}
                >
                  Terjual 0
                </p>
              </div>
              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <h2
                  style={{ color: "black", fontWeight: 700, fontSize: "18px" }}
                >
                  {selectedModel}, {pickedVariantsIndex?.color}
                </h2>
                <h2
                  style={{ color: "black", fontWeight: 400, fontSize: "14px" }}
                >
                  {pickedVariantsIndex?.capacity + " GB"}
                </h2>
              </div>
              <div>
                <p style={{ color: "#FF0025", fontSize: "32px" }}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(pickedVariantsIndex?.discount_price)}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <p
                    style={{
                      color: "#99A0A7",
                      fontSize: "16px",
                      textDecoration: "line-through",
                    }}
                  >
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(pickedVariantsIndex?.original_price)}
                  </p>
                  <p
                    style={{
                      background:
                        "linear-gradient(81.56deg, #001A41 17.5%, #0E336C 100%)",
                      padding: "5px 15px",
                      borderRadius: "8px",
                      fontSize: "10px",
                    }}
                  >
                    -{pickedVariantsIndex?.discount}%
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "#0050AE",
                  fontSize: "12px",
                  border: "1px solid #0050AE",
                  maxWidth: "157px",
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "20px",
                }}
              >
                Official {pickedVariantsIndex?.warranty} warranty
              </p>
            </div>
            <div
              style={{
                width: "50%",
                color: "black",
                backgroundColor: "white",
                border: "1px solid lightgrey",
                borderRadius: "12px 12px 42px",
                display: "flex",
                flexDirection: "column",
                padding: "22px 28px",
                // gap: "px",
              }}
            >
              {/* <SVG /> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ margin: 0, top: 0 }}
                  src={
                    process.env.REACT_APP_STORAGE_KEY + data?.brand?.brand_logo
                  }
                  alt="err"
                  width="90px"
                />
                <h2 style={{ color: "black", fontWeight: 500 }}>
                  {data?.brand?.name}
                </h2>
              </div>
              <br />
              <hr
                style={{
                  borderTop: "1px solid lightgrey",
                  borderLeft: 0,
                  borderRight: 0,
                  backgroundColor: "transparent",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexDirection: "column",
                  padding: "20px 0px",
                }}
              >
                <p style={{ color: "black" }}>{data?.name}</p>
                <p
                  style={{
                    color: "#66707A",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px 0px",
            }}
          >
            <h2 style={{ color: "#001A41", fontSize: "16px", fontWeight: 700 }}>
              Select Product Variation
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p style={{ color: "#757F90" }}>Model</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                {data?.variants
                  ?.filter(
                    (val, index, self) =>
                      index === self.findIndex((t) => t.model === val.model)
                  )
                  .map((val, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedModel(val.model);
                        setVariantsPickedIndex({
                          id: val.variant_id,
                          color: val.color,
                          capacity: val.capacity,
                          stock: val.stock || 0,
                          original_price: val.price || 0,
                          discount_price: val.special_price || 0,
                          discount: val.discount || 0,
                          warranty: val.warranty || "",
                        });
                      }}
                      disabled={selectedModel === val.model}
                      style={{
                        color: "#001A41",
                        backgroundColor:
                          selectedModel === val.model || ""
                            ? "lightgray"
                            : "#EDF5FC",
                        width: "140px",
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "15px",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        style={{ margin: 0, top: 0 }}
                        src={iphone}
                        alt="err"
                        width="28px"
                      />
                      <p
                        style={{
                          color: "#001A41",
                          fontWeight: 700,
                          fontSize: "12px",
                        }}
                      >
                        {val.model}
                      </p>
                    </button>
                  ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p style={{ color: "#757F90" }}>Color</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                {data?.variants
                  // ?.filter(
                  //   (val, index, self) =>
                  //     // index === self.findIndex((t) => t.color === val.color)
                  // )
                  ?.map((val, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setVariantsPickedIndex({
                          id: val.variant_id,
                          color: val.color,
                          capacity: val.capacity,
                          stock: val.stock || 0,
                          original_price: val.price || 0,
                          discount_price: val.special_price || 0,
                          discount: val.discount || 0,
                          warranty: val.warranty || "",
                        });
                      }}
                      disabled={pickedVariantsIndex?.color === val.color}
                      style={{
                        color: "#001A41",
                        backgroundColor:
                          pickedVariantsIndex?.color === val.color
                            ? "lightgray"
                            : "#EDF5FC",
                        width: "140px",
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "15px",
                        borderRadius: "8px",
                      }}
                    >
                      <img
                        style={{ margin: 0, top: 0 }}
                        src={iphone}
                        alt="err"
                        width="28px"
                      />
                      <p
                        style={{
                          color: "#001A41",
                          fontWeight: 700,
                          fontSize: "12px",
                        }}
                      >
                        {val.color}
                      </p>
                    </button>
                  ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p style={{ color: "#757F90" }}>Capacity</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                {data?.variants
                  ?.filter(
                    (val, index, self) =>
                      index ===
                      self.findIndex((t) => t.capacity === val.capacity)
                  )
                  .map((val, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setVariantsPickedIndex({
                          id: val.variant_id,
                          color: val.color,
                          capacity: val.capacity,
                          stock: val.stock || 0,
                          original_price: val.price || 0,
                          discount_price: val.special_price || 0,
                          discount: val.discount || 0,
                          warranty: val.warranty || "",
                        });
                      }}
                      disabled={pickedVariantsIndex?.capacity === val.capacity}
                      style={{
                        color: "#001A41",
                        backgroundColor:
                          pickedVariantsIndex?.capacity === val.capacity
                            ? "lightgray"
                            : "#EDF5FC",
                        width: "88px",
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "15px",
                        borderRadius: "8px",
                      }}
                    >
                      <p
                        style={{
                          color: "#001A41",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      >
                        {val.capacity + " GB"}
                      </p>
                    </button>
                  ))}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
              padding: "24px 0px",
            }}
          >
            <h2 style={{ color: "#001A41", fontSize: "16px", fontWeight: 700 }}>
              Specification
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                //   backgroundColor: "red",
                width: "70%",
              }}
            >
              <Specs label={`Screen`} value={data?.screen} />
              <Specs label={`Rear Camera`} value={data?.rear_camera} />
              <Specs label={`Front Camera`} value={data?.front_camera} />
              <Specs label={`Processor`} value={data?.processor} />
              <Specs label={`Battery`} value={data?.battery} />
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Screen
                </p>
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  6.1"
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Rear Camera
                </p>
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  48MP
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Front Camera
                </p>
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  12MP
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Processor
                </p>
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  16GB
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "20px",
                }}
              >
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  Battery
                </p>
                <p
                  style={{
                    width: "50%",
                    color: "#4E5764",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  3349 MAh
                </p>
              </div> */}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px 0px",
            }}
          >
            <h2 style={{ color: "#001A41", fontSize: "16px", fontWeight: 700 }}>
              Key Feature Points
            </h2>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p
                style={{ color: "#4E5764", fontWeight: 700, fontSize: "18px" }}
              >
                Poin-Poin Fitur Utama
              </p>
              {/* <div
                style={{
                  color: "#001A41",
                  display: "flex",
                  gap: "5px",
                  borderRadius: "8px",
                  paddingLeft: "12px",
                }}
              >
                <IconCircleFilled
                  style={{ padding: "5px" }}
                  size="12px"
                  color="#4E5764"
                />
                <p
                  style={{
                    color: "#4E5764",
                    fontWeight: 400,
                  }}
                >
                  DYNAMIC ISLAND HADIR DI IPHONE 15 — Dynamic Island menampilkan
                  gelembung pemberitahuan dan Aktivitas Langsung — jadi Anda
                  tidak melewatkannya saat melakukan hal lain. Anda dapat
                  melihat siapa yang menelepon, memeriksa status penerbangan
                  Anda, dan… banyak lagi. DESAIN INOVATIF — iPhone 15 Plus
                  dilengkapi dengan desain aluminium dan kaca berwarna.
                </p>
              </div> */}
              <DottedPoints />
              <p
                style={{ color: "#0050AE", fontWeight: 400, fontSize: "16px" }}
              >
                See All
              </p>
            </div>
          </div>
          {/* <dottedPoints /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // gap: "10px",
              padding: "24px 20px",
              paddingBottom: "120px",
            }}
          >
            <h2
              style={{
                color: "#001A41",
                fontSize: "16px",
                fontWeight: 700,
                paddingBottom: "5px",
              }}
            >
              Attractive Bundling Package Options
            </h2>
            <p
              style={{
                color: "#757F90",
                fontWeight: 400,
              }}
            >
              By purchasing this device, you are entitled to a special package
              offer with an attractive subscription price
            </p>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "362px",
                borderRadius: "25px",
                boxShadow: "2px 2px 20px 0px #9E9E9E69",
                background: "linear-gradient(180deg, #ED0226 0%, #B90024 100%)",
              }}
            >
              <p
                style={{
                  color: "black",
                  backgroundColor: "#FDA22B",
                  width: "fit-content",
                  textAlign: "center",
                  padding: "6px 14px",
                  borderRadius: "25px 0px 25px",
                  fontSize: "10px",
                  fontWeight: 500,
                  // height: "10px",
                }}
              >
                Recomended
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "10px 20px",
                  gap: "15px",
                  justifyContent: "start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    //   width: "70px",
                    height: "45px",
                  }}
                >
                  <p style={{ color: "black", fontSize: "20px" }}>
                    {data?.bundling?.quota_amount + " GB"}
                  </p>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    {data?.bundling?.active_period + " Bulan"}
                  </p>
                </div>
                <div
                  style={{
                    //   width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontSize: "12px", fontWeight: 400 }}>
                    {data?.bundling?.name} ({data?.bundling?.tenor})
                  </p>
                  <p style={{ fontSize: "18px", fontWeight: 400 }}>
                    {data?.bundling?.price_amount}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <IconCircleFilled size="4px" color="white" />
                    <p style={{ fontSize: "10px", fontWeight: 400 }}>
                      {data?.bundling?.description}
                    </p>
                  </div>
                </div>
              </div>

              <button
                className="button1"
                onClick={() => setIsOpenModal(true)}
                style={{
                  cursor: "pointer",
                  // backgroundColor: "white",
                  border: "none",
                  color: "#FF0025",
                  fontWeight: 700,
                  padding: "13px",
                  borderRadius: "0px 0px 25px 25px",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductFooter />
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            width: "960px",
            bgcolor: "white",
            border: "none",
            borderRadius: "32px",
            outline: "none",
            flexDirection: "column",
            overflow: "auto",
            maxHeight: "80%",
          }}
        >
          <Box
            sx={{
              py: "20px",
              pt: "30px",
              bgcolor: "#EDF5FC",
              borderRadius: "0 0 100px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                color="black"
                py="5px"
                paddingLeft="40px"
                paddingRight="20px"
                borderRadius="0 20px 20px 0px"
                bgcolor="#FDA22B"
                fontWeight={600}
              >
                {data?.bundling?.active_period + " Bulan"}
              </Typography>
              <IconX
                onClick={() => setIsOpenModal(false)}
                color="black"
                size={32}
                style={{ paddingRight: "30px", cursor: "pointer" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                px: "40px",
                pt: "35px",
                gap: "8px",
              }}
            >
              <Typography color="black" fontWeight={700}>
                {data?.bundling?.name}
              </Typography>
              <Typography color="black" fontWeight={400}>
                {data?.bundling?.description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // paddingX: "40px",
              paddingBottom: "40px",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                // bgcolor: "red",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  pt: "40px",
                  display: "flex",
                  gap: "40px",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid gray",
                    pb: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography color="black" fontSize={14}>
                    Nomor Telkomsel*
                  </Typography>
                  <select
                    type="text"
                    title="NIK"
                    style={{
                      border: "1px solid grey",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "black",
                    }}
                    // onChange={(e) => setEmergencyCall(e.target.value)}
                  />
                  <Typography color="#243B7F" fontSize={14}>
                    Cari Nomor Kombinasi Angka Favoritmu
                  </Typography>
                </Box>
                <Underlined
                  label={`Telepon Ke Semua Operator`}
                  value={data?.bundling?.msisdn}
                />
              </Box>
              <Box
                sx={{
                  pt: "40px",
                  display: "flex",
                  gap: "40px",
                  flexDirection: "column",
                }}
              >
                <Underlined label={`Roaming`} value={data?.bundling?.msisdn} />
                <Underlined label={`Internet`} value={data?.bundling?.msisdn} />
                <Underlined
                  label={`SMS Ke Semua Operator`}
                  value={data?.bundling?.msisdn}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: "80px",
                pt: "40px",
              }}
            >
              <Typography color="black">
                Harga belum termasuk PPN 11%. PPN akan dibayarkan oleh Pelanggan
                setiap bulannya saat terbit tagihan. Biaya paket dibayarkan di
                depan bersamaan dengan smartphone baru yang dibeli sesuai dengan
                periode kontrak.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductDetail;
