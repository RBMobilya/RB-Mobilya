import React, { useEffect, useState } from "react";
import { products, categories, Mycolors } from "../data/Data"; // Centralized data
import Filters from "./Filters"; // Separate Filters component
import Product from "./Product"; // Separate Product component
import "../pages/Products.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
const Allproducts = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
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
  console.log(filteredProducts);
  return (
    <Container className="py-3">
      <h2 style={{ fontFamily: "Space Grotesk" }}>All Products</h2>

      <div className="all-products-page ">
        <button
          className="btn btn-outline-dark d-lg-none mb-3"
          onClick={() => setFiltersVisible(!filtersVisible)}
        >
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
        <div className={`filters`}>
          <Filters
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            Mycolors={Mycolors}
          />
        </div>

        <div className="products-grid ">
          {filteredProducts.length > 0 ? (
            <div className="row">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-6 col-md-4 col-lg-4 mb-4 "
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
