import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

const FilterContainer = ({ contents }) => {
  const [isHidden, setIsHidden] = useState(contents.map(() => false)); // Initially hide all

  const toggleHidden = (index) => {
    setIsHidden((prevHidden) =>
      prevHidden.map((hidden, i) => (i === index ? !hidden : hidden))
    );
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px 25px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      {contents?.map((val, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div
            onClick={() => toggleHidden(index)}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                color: "black",
                paddingBottom: `${!isHidden[index] ? "10px" : "0px"}`,
              }}
            >
              {val.title}
            </p>
            {isHidden[index] ? (
              <IconChevronDown color="black" />
            ) : (
              <IconChevronUp color="black" />
            )}
          </div>
          {!isHidden[index] && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {val.label.map((labs) => (
                <div
                  key={labs.label}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id={labs.label}
                    name={labs.label}
                    value={labs.label}
                  />
                  <p style={{ color: "black" }}>{labs.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FilterBar = () => {
  const contents = [
    {
      title: "Filter by: Price",
      label: [
        { label: "Highest Price" },
        { label: "Lowest Price" },
        { label: "Popular" },
      ],
    },
  ];

  const contents2 = [
    {
      title: "Kapasitas Memori",
      label: [
        { label: "1TB" },
        { label: "512GB" },
        { label: "256GB" },
        { label: "128GB" },
        { label: "64GB" },
      ],
    },
    {
      title: "Kapasitas RAM",
      label: [
        { label: "16GB" },
        { label: "12GB" },
        { label: "8GB" },
        { label: "6GB" },
        { label: "4GB" },
      ],
    },
  ];

  const contents3 = [
    {
      title: "Paket Bundling",
      label: [
        { label: "Small" },
        { label: "Medium" },
        { label: "Large" },
        { label: "X-Large" },
      ],
    },
  ];

  return (
    <div
      style={{
        width: "355px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <FilterContainer contents={contents} />
      <FilterContainer contents={contents2} />
      <FilterContainer contents={contents3} />
    </div>
  );
};

export default FilterBar;
