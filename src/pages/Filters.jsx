import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Filters = ({ filters, setFilters, categories, Mycolors }) => {
  const [isCategoryFilterOpen, setIsCategoryFilterOpen] = useState(false);
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  const [isColorFilterOpen, setIsColorFilterOpen] = useState(false);
  // Handle Price Inputs
  const handleMinPriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: Math.min(e.target.value, filters.maxPrice - 100),
    }));
  };

  const handleMaxPriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: Math.max(e.target.value, filters.minPrice + 100),
    }));
  };

  // Handle Category Inputs
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  // Handle Color Inputs
  const handleColorChange = (e) => {
    setFilters((prev) => ({ ...prev, color: e.target.value }));
  };

  return (
    <>
      {/* Categories Section */}
      <div className="filter-group">
        <div
          className="filter-header"
          onClick={() => setIsCategoryFilterOpen(!isCategoryFilterOpen)} // Toggle the category filter
        >
          <h3 style={{ fontFamily: "Space Grotesk" }}>Kateqoriyalar</h3>
          <span className={`toggle-arrow ${isCategoryFilterOpen ? "up" : ""}`}>
            {isCategoryFilterOpen ? "▲" : "▼"}
          </span>
        </div>
        <div
          className={`filter-content ${
            isCategoryFilterOpen ? "open" : "collapsed"
          }`}
        >
          <ul className="category-radio">
            {categories.map((category, index) => (
              <li key={category.id}>
                <input
                  type="radio"
                  name="category"
                  id={`category-${index}`}
                  value={category.name}
                  checked={filters.category === category.name}
                  onChange={handleCategoryChange}
                  className="custom-radio"
                />
                <label
                  style={{ fontFamily: "Space Grotesk" }}
                  htmlFor={`category-${index}`}
                  className="category-label"
                >
                  {category.name}
                </label>
              </li>
            ))}
          
          </ul>
        </div>
      </div>

      {/* Price Filter Section */}
      <div className="filter-group">
        <div
          className="filter-header"
          onClick={() => setIsPriceFilterOpen(!isPriceFilterOpen)} // Toggle the price filter
        >
          <h3 style={{ fontFamily: "Space Grotesk" }}>Qiymət</h3>
          <span className={`toggle-arrow ${isPriceFilterOpen ? "up" : ""}`}>
            {isPriceFilterOpen ? "▲" : "▼"}
          </span>
        </div>
        <div
          className={`filter-content ${
            isPriceFilterOpen ? "open" : "collapsed"
          }`}
        >
          <div className="slider-wrapper">
            <input
              type="range"
              className="price-slider"
              min="0"
              step="1"
              max="8000"
              value={filters.minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="range"
              className="price-slider-max"
              min="0"
              max="8000"
              step="1"
              value={filters.maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>

          {/* Price Inputs */}
          <div className="price-inputs">
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) => handleMinPriceChange(e)}
              className="min-price"
            />
            <span> - </span>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => handleMaxPriceChange(e)}
              className="max-price"
            />
          </div>
        </div>
      </div>

      {/* Colors Filter Section */}
      {/* Colors Filter Section */}
      <div className="filter-group">
        <div
          className="filter-header"
          onClick={() => setIsColorFilterOpen(!isColorFilterOpen)} // Toggle the color filter
        >
          <h3 style={{ fontFamily: "Space Grotesk" }}>Rəng</h3>
          <span className={`toggle-arrow ${isColorFilterOpen ? "up" : ""}`}>
            {isColorFilterOpen ? "▲" : "▼"}
          </span>
        </div>
        <div
          className={`filter-content ${
            isColorFilterOpen ? "open" : "collapsed"
          }`}
        >
          <ul className="color-options">
            {Mycolors.map((color, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="color"
                    style={{ display: "none" }}
                    value={color.name}
                    onChange={(e) => handleColorChange(e, color.name)}
                  />
                  <span
                    className={`color-box ${
                      filters.color === color.name ? "active" : ""
                    }`}
                    style={{ backgroundColor: color.code }}
                  ></span>
                  <div style={{ fontFamily: "Space Grotesk" }}>
                    {color.name}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </>
  );
};

export default Filters;
