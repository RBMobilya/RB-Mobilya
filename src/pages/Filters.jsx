import React from "react";
import "./Products.css";
const Filters = ({ filters, setFilters, categories, Mycolors }) => {
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
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };
  const handleColorChange = (e) => {
    setFilters((prev) => ({ ...prev, color: e.target.value }));
  };
  return (
    <div className="filter-sidebar ">
      <div className="filter-group">
        <h3 style={{fontFamily:'Space Grotesk'}} >Categories</h3>
        <ul className="catergory-radio">
          {categories.map((category, index) => (
            <li key={category.id}>
              <input
                type="radio"
                name="category"
                style={{fontFamily:'Space Grotesk'}}
                id={`category-${index}`}
                value={category.name}
                checked={filters.category === category.name}
                onChange={handleCategoryChange}
                className="custom-radio"
              />

              <label style={{fontFamily:'Space Grotesk'}} htmlFor={`category-${index}`} className="category-label">
                {category.name}
              </label>
            </li>
          ))}
          <li>
            <a href="#">Hamısını gör</a>
          </li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="filter-group">
        <h3 style={{fontFamily:'Space Grotesk'}} >Qiymət</h3>
        {/* Range Slider with Two Handles */}
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

        {/* Input Fields for Min and Max Prices */}
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

        {/* Display the current min/max prices */}
      </div>

      {/* Colors Filter */}
      <div className="filter-group">
        <h3 style={{fontFamily:'Space Grotesk'}} >Rəng</h3>
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
               <div style={{fontFamily:'Space Grotesk'}}> {color.name}</div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
