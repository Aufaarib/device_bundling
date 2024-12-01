import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";
import ProductCard from "../shared/ProductCard";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { getAllProducts, getProductByBrand } from "../APIs/ProductsAPI";
import { useAppContext } from "../shared/Context";
import BreadCrumbs from "../shared/BreadCrumbs";
import { Typography } from "@mui/material";
import BreadCrumbsButton from "../shared/Buttons/BreadCrumbs";

const Table = () => {
  const params = new URLSearchParams(window.location.search);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState([]);
  const { isLoading, setIsLoading } = useAppContext();

  useEffect(() => {
    if (params.get("brand")) {
      getProductByBrand(setData, setMeta, params.get("brand"), setIsLoading);
    } else {
      getAllProducts(setData, setMeta, setIsLoading);
    }
  }, []);

  const styles = `
        .pagination {
            display: flex;
            // background-color: #F5F6FA;
            justify-content: center;
            align-items: center;
            padding: 5px;
            gap: 10px;
            border-radius: 100px
        }
        .pagination li {
            border-radius: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background-color: transparent;
        }
        .pagination li.previous, li.next {
            // background-color: #3FB648;
            color: black;
        }
        .pagination li.previous.disabled, li.next.disabled {
            // background-color: gray;
            color: black;
        }
        .pagination li.previous a {
            color: black;
        }
        .pagination li.next a {
            color: black;
        }
        .pagination li.active {
            background-color: transparent;
            border: 1px solid red;
            color: red;
        }
        .pagination li.disabled {
            cursor: default;
        }
        .pagination li a {
            border-radius: 100%;
            cursor: pointer;
            color: black;
            width: 100%;
            height: 100%;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
        }
        .pagination li.active a {
            cursor: pointer;
            // color: #3FB648;
        }
        .pagination li.disabled a {
            cursor: not-allowed;
            // color: white;
        }
        // .pagination li:hover{
        //     background-color: #8F0D1E;
        // }
        // .pagination li:hover a{
        //     background-color: #8F0D1E;
        //     color: #fff;
        // }
        // .pagination li.disabled:hover{
        //     background-color: transparent;
        // }
        // .pagination li.disabled:hover a{
        //     background-color: transparent;
        //     color: grey;
        // }
        `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
        // backgroundColor: "red",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   paddingRight: "100px",
        }}
      >
        <p style={{ color: "black", fontWeight: 700, fontSize: "32px" }}>
          Products
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <p style={{ color: "black" }}>Showing 1-10 of 100 Products</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <p style={{ color: "black" }}>Short by: </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  color: "black",
                  fontWeight: 700,
                }}
              >
                Latest
              </p>
              <IconChevronDown color="black" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          // justifyContent: "center",
          // backgroundColor: "red",
          // gridTemplateColumns: "repeat(3, minmax(200px, 1fr))", // Responsive columns
          // gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          //   height: "900px", // 3 rows with equal heights (adjust this value as needed)
          //   overflowY: "auto", // Scrollable for extra content
        }}
      >
        {data.map((val, index) => (
          <div key={index}>
            <ProductCard
              product_id={val.product_id}
              brand={val.brand?.name}
              product_name={val?.name}
              product_color={val?.variants[0]?.detail[0]?.color}
              product_stock={val?.variants[0]?.detail[0]?.stock}
              normal_price={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(val.variants[0]?.detail[0]?.price)}
              special_price={new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(val.variants[0]?.detail[0]?.special_price)}
              discount={val.variants[0]?.detail[0]?.discount}
            />
          </div>
        ))}
      </div>
      <div style={{ padding: "20px" }}>
        <style>{styles}</style>
        <ReactPaginate
          previousLabel={
            <IconChevronLeft
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              color="black"
            />
          }
          nextLabel={
            <IconChevronRight
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              color="black"
            />
          }
          breakLabel={<a>...</a>}
          pageRangeDisplayed={meta.per_page}
          marginPagesDisplayed={1}
          forcePage={0}
          pageCount={meta.page_count}
          // onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Table;
