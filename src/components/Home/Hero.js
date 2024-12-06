import { useNavigate, useRoutes } from "react-router-dom";
import logo from "../../styles/assets/bg.png";
import cont from "../../styles/assets/cont.png";
import { getAllBrands, getAllProducts } from "../APIs/ProductsAPI";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppContext } from "../shared/Context";
import axios from "axios";
import debounce from "lodash.debounce";

const Hero = () => {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useAppContext();
  const [data2, setData2] = useState([]); // Store fetched data
  const [data, setData] = useState([]); // Store fetched data
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // To handle no more data
  const isLoadingRef = useRef(false); // Ref to track loading state without causing re-renders

  // Fetch data function
  const fetchData = useCallback(async () => {
    if (isLoadingRef.current) return; // Prevent duplicate fetches
    isLoadingRef.current = true;

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/brand/all-brand?page=${page}`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
        }
      );

      const newItems = response.data.body; // Adjust based on API structure
      setData((prevData) => [...prevData, ...newItems]);
      setHasMore(newItems.length > 0); // No more data if response is empty
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      isLoadingRef.current = false;
    }
  }, [page]);

  // Trigger fetch when page changes
  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce((e) => {
      const { scrollLeft, scrollWidth, clientWidth } = e.target;

      // Check if scrolled near the end of the container
      if (
        scrollWidth - scrollLeft <= clientWidth + 100 &&
        hasMore &&
        !isLoadingRef.current
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 200), // Adjust debounce delay if necessary
    [hasMore]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      handleScroll.cancel(); // Cancel debounce on unmount
    };
  }, [handleScroll]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        gap: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          // flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          padding: "30px 110px",
          background:
            "linear-gradient(84.42deg, #B90024 15.71%, #FF0025 68.97%, #FD195E 94.61%)",
          borderRadius: "0px 0px 0px 100px",
          height: "525px",
          maxWidth: "100%",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "33%",
            gap: "15px",
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: "40px", color: "#FFFFFF" }}>
            Cari HP Sama Bundling Paket Kuota No Ribet!
          </h1>
          <p style={{ fontWeight: 300, fontSize: "16px", color: "#FFFFFF" }}>
            Beli handphone langsung sama paketannya! Ga Perlu Ribet, Ga Khawatir
            Cicilan
          </p>
          <button
            onClick={() => navigate("/products")}
            style={{
              backgroundColor: "white",
              padding: "10px 50px",
              borderRadius: "40px",
              border: "none",
              color: "#ED0226",
              width: "248px",
              height: "56px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            <h1 style={{ fontWeight: 700, fontSize: "18px", color: "#ED0226" }}>
              Beli Sekarang
            </h1>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ position: "absolute" }}
            src={cont}
            alt="err"
            width="346px"
          />
          <img style={{}} src={logo} alt="err" width="529px" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "38px 110px",
          justifyContent: "center",
          gap: "30px",
          // backgroundColor: "red",
        }}
      >
        <h2 style={{ color: "black" }}>Pilihan Smartphone</h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            // overflow: "auto",
            // height: "158px",
          }}
        >
          <div
            onClick={() => navigate("/products")}
            style={{
              cursor: "pointer",
              display: "flex",
              padding: "10px 30px",
              border: "2px solid lightgrey",
              width: "160px",
              height: "58px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "16px",
            }}
          >
            <p
              style={{
                color: "black",
                fontWeight: "semibold",
              }}
            >
              Semua Brand
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              overflow: "scroll",
            }}
            // ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {data
              ?.filter(
                (val, index, self) =>
                  index === self.findIndex((t) => t.name === val.name)
              )
              .map((item, index) => (
                <div
                  onClick={() => navigate(`/products?brand=${item.id}`)}
                  key={index}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    padding: "10px 30px",
                    border: "2px solid lightgrey",
                    minWidth: "100px",
                    height: "58px",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "16px",
                  }}
                >
                  <p
                    style={{
                      color: "black",
                      fontWeight: "semibold",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
          </div>
          {isLoading && <p>Loading...</p>}
          {!hasMore && <p>No more data to load</p>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
