import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import { products } from "../data/Data";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

const SimilarProducts = ({ currentProduct }) => {
  // Filter products that have the same category as the current product
  const similarProducts = products.filter(
    (product) =>
      product.category === currentProduct?.category &&
      product.id !== currentProduct.id
  );

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse events for "drag to scroll"
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = ""; // Re-enable text selection
      document.body.style.cursor = "";
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = ""; // Re-enable text selection
      document.body.style.cursor = "";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default behavior while dragging
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier can be adjusted for faster/slower scroll
    carouselRef.current.scrollLeft = scrollLeft - walk;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };
  useEffect(() => {
    const stopDragging = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.userSelect = ""; // Re-enable text selection
        document.body.style.cursor = "";
      }
    };
    window.addEventListener("mouseup", stopDragging); // Global mouseup event to reset dragging

    return () => {
      window.removeEventListener("mouseup", stopDragging); // Cleanup event listener
    };
  }, [isDragging]);
  console.log(isDragging);
  // Return nothing if currentProduct or its category is undefined
  if (!currentProduct || !currentProduct.category) {
    return null;
  }

  return (
    <div>
      <h3>Oxşar Məhsullar</h3>
      <div className="carousel-wrapper2">
        <div
          className="carousel-container2"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="carousel2">
            {similarProducts.length > 0 ? (
              similarProducts.map((product) => (
                <div key={product.id} className="karousel-item2">
                  <Link
                    draggable="false"
                    className="product-link"
                    to={`/product/${product.id}`}
                  >
                    <Card.Img
                      className="carousel-item-img2"
                      variant="top"
                      src={product.defaultImage}
                      alt={product.name}
                      draggable="false"
                    />
                  </Link>
                  <div className="d-flex flex-column">
                    <div className="carousel-item-caption2">{product.name}</div>
                    <div className="mt-auto price fw-bold">
                      {product.price} ₼
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-similar-products">
                <h2 style={{ color: "#f1c40f" }}>Oxşar Məhsul Yoxdur</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
