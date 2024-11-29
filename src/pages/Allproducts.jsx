import React, { useEffect, useState } from "react";
import { products, categories, Mycolors } from "../data/Data"; // Centralized data
import Filters from "./Filters"; // Separate Filters component
import "../pages/Products.css";
import { Container } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import Product from "./Product";
import { MdFilterList } from "react-icons/md";

const Allproducts = () => {
  const [filtersVisible, setFiltersVisible] = useState(false); // State to control the visibility of the filters modal
  const [visibleProducts, setVisibleProducts] = useState(12); // State to manage number of visible products
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

  // Function to load more products when the "Daha Cox" button is clicked
  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8); // Load 8 more products
  };

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
      <h2 className="d-none d-lg-block" style={{ fontFamily: "Space Grotesk" }}>
        All Products
      </h2>

      {/* Button to show filters on mobile */}
      <div
        className="d-flex d-lg-none"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h1 style={{ fontSize: "20px", display: "flex" }}>
          Bütün Məhsullar{" "}
          <p style={{ color: "grey", fontSize: "10px" }}>
            ({filteredProducts.length})
          </p>
        </h1>
        <MdFilterList
          style={{ fontSize: "28px" }}
          onClick={handleFilterToggle}
        />
      </div>

      <div className="all-products-page">
        {/* Filter modal overlay for mobile */}
        <div
          className={`filter-overlay ${filtersVisible ? "visible" : ""}`}
          onClick={handleFilterToggle} // Clicking outside the modal should also close it
        ></div>

        {/* Filter modal (sliding panel from bottom) */}
        <div className={`filter-sidebar ${filtersVisible ? "visible" : ""}`}>
          <div className="filter-modal-close">
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
              style={{ fontSize: "36px", cursor: "pointer" }}
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
          <div className="filter-group reset">
            <div>
              <Link style={{ color: "rgba(255, 187, 0, 1)" }} to={"/products"}>
                Reset Filters
              </Link>
            </div>
          </div>

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
              {filteredProducts.slice(0, visibleProducts).map((product) => (
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
      {/* Load More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="d-flex justify-content-center mt-4">
          <button
            style={{ color: "white" }}
            className="btn btn-warning"
            onClick={loadMoreProducts}
          >
            Daha Çox
          </button>
        </div>
      )}
    </Container>
  );
};

export default Allproducts;
