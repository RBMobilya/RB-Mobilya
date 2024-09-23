import React, { useState } from 'react';
import { Image, Col, Row } from 'react-bootstrap';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <Row>
        <Col sm={3}>
          {/* Display thumbnail images */}
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              thumbnail
              className="mb-2"
              onClick={() => setSelectedImage(image)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Col>
        <Col sm={9}>
          {/* Display the selected image */}
          <Image src={selectedImage} fluid />
        </Col>
      </Row>
    </div>
  );
};

export default ImageGallery;
