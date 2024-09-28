import React, { useEffect, useState } from "react";
import { Image, Col, Row } from "react-bootstrap";
import "./SingleProduct.css";

const ImageGallery = ({ images, defaultImage}) => {
  const allImages = [defaultImage, ...images];
console.log(defaultImage)
  // Set the selected image to the default image initially
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);
  console.log(images);
  return (
    <div>
      <Row>
        <Col sm={2}>
          {/* Display thumbnail images */}
          {allImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              thumbnail
              className="mb-2"
              onClick={() => setSelectedImage(image)}
              style={{ cursor: "pointer", objectFit: "cover" }}
            />
          ))}
        </Col>
        <Col sm={9}>
          {/* Display the selected image */}
          <Image
            src={selectedImage}
            style={{ width: "887px", height: "560px" }}
            fluid
          />
        </Col>
      </Row>
    </div>
  );
};

export default ImageGallery;
