import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
// Install Swiper modules
SwiperCore.use([Pagination]);

const ImageGallery = ({ images, defaultImage }) => {
  const allImages = [defaultImage, ...images];
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  useEffect(() => {
    setSelectedImage(defaultImage);
  }, [defaultImage]);

  return (
    <>
     <Row className="d-none d-lg-flex">
        <Col sm={2} className="image-thumbnails-container">
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
          <Image
            src={selectedImage}
            style={{ width: "500px", height: "500px" }}
            fluid
          />
        </Col>
      </Row>

      {/* for mobile */}
      <Swiper
      className="d-lg-none"
        spaceBetween={10}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setSelectedImage(allImages[swiper.activeIndex])}
        style={{ maxWidth: "100%" }}
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product Image ${index}`}
              style={{
                width: "100%",
                height: "508px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageGallery;
