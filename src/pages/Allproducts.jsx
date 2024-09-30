import React, { useEffect, useState } from "react";
import { products, categories, Mycolors } from "../data/Data"; // Centralized data
import Filters from "./Filters"; // Separate Filters component
import "../pages/Products.css";
import { Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Product from "./Product";

const Allproducts = () => {
  const [filtersVisible, setFiltersVisible] = useState(false); // State to control the visibility of the filters modal

  const { categoryName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    if (categoryName) {
      setFilters((prev) => ({ ...prev, category: categoryName }));
    }
  }, [categoryName]);

  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 8000,
    color: "",
  });

  // Filter products based on selected filters
  const filteredProducts = (products || []).filter((product) => {
    const categoryMatch =
      filters.category === "" || product.category === filters.category;
    const priceMatch =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const colorMatch =
      filters.color === "" ||
      product.colors.some(
        (c) => c.name.toLowerCase() === filters.color.toLowerCase()
      );

    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    const categoryNameMatch = product.category
      .toLowerCase()
      .includes(searchTerm);
    const colorNameMatch = product.colors.some((color) =>
      color.name.toLowerCase().includes(searchTerm)
    );

    return (
      categoryMatch &&
      priceMatch &&
      colorMatch &&
      (nameMatch || categoryNameMatch || colorNameMatch)
    );
  });

  // Handle filter button click to open/close filter modal (only for mobile)
  const handleFilterToggle = () => {
    setFiltersVisible(!filtersVisible);
  };

  // Handle closing of the filter modal after filtering (only for mobile)
  const handleApplyFilters = () => {
    setFiltersVisible(false); // Close filter modal after applying filters
  };

  return (
    <Container className="py-3">
      <h2 style={{ fontFamily: "Space Grotesk" }}>All Products</h2>

      {/* Button to show filters on mobile */}
      <button
        className="btn btn-outline-dark d-lg-none mb-3"
        onClick={handleFilterToggle}
      >
        {filtersVisible ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="all-products-page">
        {/* Filter modal overlay for mobile */}
        <div
          className={`filter-overlay ${filtersVisible ? "visible" : ""}`}
          onClick={handleFilterToggle} // Clicking outside the modal should also close it
        ></div>

        {/* Filter modal (sliding panel from bottom) */}
        <div className={`filter-sidebar ${filtersVisible ? "visible" : ""}`}>
          <div
              className="filter-modal-close"

            // style={{
            //   display: "flex",
            //   justifyContent: "space-between",
            //   margin: "24px 0",
            // }}
          >
            <h1
              style={{
                color: "#1E1E1E",
                fontSize: "30px",
                fontFamily: "Space Grotesk",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Filter
            </h1>
            <div
              style={{ fontSize: "36px",cursor:'pointer' }}
              onClick={handleFilterToggle}
            >
              &times; {/* Close button */}
            </div>
          </div>

          {/* Filters Component */}
          <Filters
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            Mycolors={Mycolors}
          />

          {/* Apply Filter Button */}
          <button
            className="btn btn-warning apply-filter"
            style={{ width: "100%" }}
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            <div className="row">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-6 col-md-4 col-lg-4 mb-4"
                >
                  <Product product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h4>No products found in this category.</h4>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Allproducts;
