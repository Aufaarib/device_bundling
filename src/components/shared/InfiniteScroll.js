import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const HorizontalInfiniteScroll = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // To handle no more data
  const [loading, setLoading] = useState(false); // Show a loading indicator

  const fetchData = useCallback(async () => {
    if (loading) return; // Prevent duplicate fetches
    setLoading(true);

    try {
      const response = await axios.get(`/brand/all-brand?page=${page}`);
      const newItems = response.data.body; // Adjust according to your API structure

      setData((prevData) => [...prevData, ...newItems]);
      setHasMore(newItems.length > 0); // No more data if response is empty
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [page, loading]);

  // Trigger fetch when page changes
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle horizontal scroll
  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;

    if (scrollWidth - scrollLeft <= clientWidth + 100 && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <h1>Horizontal Infinite Scroll</h1>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          border: "1px solid #ccc",
          padding: "10px",
        }}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              width: "150px",
              margin: "0 10px",
              textAlign: "center",
              background: "#f0f0f0",
              padding: "20px",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more data to load</p>}
    </div>
  );
};

export default HorizontalInfiniteScroll;
