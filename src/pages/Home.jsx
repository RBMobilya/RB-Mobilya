import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import MySlider from "../components/slider/MySlider";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Xalçalar",
    description: "Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.",
    image: "/image/Xalcalar.png",
  },
  {
    id: 2,
    title: "Üzlüklər",
    description: "Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.",
    image: "/image/Uzlukler.png",
  },
  {
    id: 3,
    title: "Aksesuarlar",
    description: "Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.",
    image: "/image/Aksesuarlar.png",
  },
];

const bestseller = [
  {
    id: 1,
    title: "Barcelona Oturacağı",
    price: "250 ₼",
    image: "/image/product1.png", // replace with actual image paths
  },
  {
    id: 2,
    title: "Jacobsen Oturacağı",
    price: "109 ₼",
    image: "/image/product2.png",
  },
  {
    id: 3,
    title: "Adirondack Oturacağı",
    price: "99 ₼",
    image: "/image/product3.png",
  },
  {
    id: 4,
    title: "Herman Miller Aeron Oturacağı",
    price: "299 ₼",
    image: "/image/product4.png",
  },
  {
    id: 5,
    title: "Eames Lounge Kreslosu",
    price: "450 ₼",
    image: "/image/product5.png",
  },
  {
    id: 6,
    title: "Eames Lounge Kreslosu",
    price: "450 ₼",
    image: "/image/product5.png",
  },
];
const items = [
  {
    id: 1,
    title: "Ofis",
    image: "/image/ofis.png", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Mətbəx",
    image: "/image/metbex.png",
  },
  {
    id: 3,
    title: "Outdoor",
    image: "/image/outdoor.png",
  },
  {
    id: 4,
    title: "Chesterfield",
    image: "/image/chesterfield.png",
  },
  {
    id: 5,
    title: "Vintage",
    image: "/image/vintage.png",
  },
  {
    id: 6,
    title: "Loundry room",
    image: "/image/metbex.png",
  },
];

const testimonials = [
  {
    name: "Araz M.",
    feedback:
      "Bu Scandinavian yan stolu çox funksionaldır. Kiçik, lakin geniş saxlama yerinə malikdir. Dizaynı isə minimalistdir və evimdəki bütün əşyalarla uyğun gəlir.",
    image: "/image/comment1.png", // Replace with actual image paths
  },
  {
    name: "Nigar Ə.",
    feedback:
      "Bu mid-century modern kafe masasını çox funksionaldır və dizaynı ilə göz oxşayır. Qonaq otağımda həm praktik, həm də dekorativ məqsədlə istifadə edirəm.",
    image: "/image/comment2.png",
  },
  {
    name: "Yusif F.",
    feedback:
      "Aldığım Chesterfield divanı çox rahatdır və oturma otağımı zərif vurğu naxışına çevirdi. Dəri materialı çox keyfiyyətlidir və işlənməsi mükəmməldir.",
    image: "/image/comment3.png",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Create a slice of the items array starting from the currentIndex
  const visibleItems = items
    .slice(currentIndex, currentIndex + 5)
    .concat(items.slice(0, Math.max(0, currentIndex + 5 - items.length)));
  const bestsellerItems = bestseller
    .slice(currentIndex, currentIndex + 5)
    .concat(bestseller.slice(0, Math.max(0, currentIndex + 5 - items.length)));

  return (
    // Hero Section
    <>
      <MySlider />
      {/* //Section 1  */}

      <section
        className="section1"
        style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2
                style={{
                  color: "#141414",
                  fontSize: 40,
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
                className="display-5"
              >
                Rahatlıq və Harmoniyanı Öz Evində Birləşdir
              </h2>
              <p
                style={{
                  color: "#7F7F7F",
                  fontSize: "18px",
                  fontWeight: "700",
                  wordBreak: "break-word",
                }}
              >
                Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş
                şəkildə hazırlanmış və etik qaydalara uyğun olaraq
                yaradılmışdır.
              </p>
            </Col>
          </Row>

          <Row>
            {products.map((product, index) => (
              <Col key={index} xs={12} md={4} className="mb-4">
                <Card className="border-0 text-white">
                  <Card.Img
                    style={{ filter: "brightness(80%)" }}
                    src={product.image}
                    alt={product.title}
                  />
                  <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title className="fw-bold">{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* En Cox Satilan  */}

      <section
        style={{ background: "#f8f9fa;" }}
        className="product-section py-5"
      >
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="display-6">Ən Çox Satılan Məhsullar</h2>
              <p className="lead">
                Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş
                şəkildə hazırlanmış və etik qaydalara uyğun olaraq
                yaradılmışdır.
              </p>
            </Col>
          </Row>

          <div className="carousel-wrapper">
            <div className="carousel-container">
              {/* xs={12} sm={6} md={4} lg={2} className="mb-4 custom-col" */}
              <div className="carousel">
                {bestsellerItems.map((bestsell) => (
                  <div key={bestsell.id} className="karousel-item">
                    <img
                      className="carousel-item-img"
                      variant="top"
                      src={bestsell.image}
                      alt={bestsell.title}
                    />
                    <div className="d-flex flex-column">
                      <div
                        style={{
                          fontFamily: "Space Gortesk",
                          fontWeight: "400",
                          fontSize: "16px",
                        }}
                        className="carousel-item-caption"
                      >
                        {bestsell.title}
                      </div>
                      <div
                        style={{
                          color: "#E6AA04",
                          textAlign: "center",
                          fontFamily: "Space Gortesk",
                          wordWrap: "break-word",
                        }}
                        className="mt-auto  fw-bold"
                      >
                        {bestsell.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn left-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <button className="carousel-btn right-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </Container>
      </section>

      {/* Hero banner 2  */}

      <div className="section-4 d-flex justify-content-center align-items-center">
        <div className="section4-content text-center">
          <h1 className="text-white display-5">
            Yeni Kampaniyalar Artıq Əlçatandır
          </h1>
          <p className="text-white lead">
            Evinizi ifadə etmək üçün 300-dən çox yol alın.
          </p>
          <Button
            className="cta-btn"
            variant="light"
            size="lg"
            style={{
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "18px",
              background: "white",
            }}
          >
            <Link to="/"> DAHA ÇOX</Link>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <section className="category-section py-5">
        <Container>
          <div className="text-center mb-4">
            <h2 className="display-6">Kateqoriyalar</h2>
            <p className="lead">
              Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş şəkildə
              hazırlanmış və etik qaydalara uyğun olaraq yaradılmışdır.
            </p>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel">
                {visibleItems.map((item) => (
                  <div key={item.id} className="karousel-item">
                    <img
                      className="carousel-item-img"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="carousel-item-caption">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn left-btn" onClick={prevSlide}>
              &#10094;
            </button>

            <button className="carousel-btn right-btn" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </Container>
      </section>
      {/* About section  */}
      <div className="about-section d-flex justify-content-center align-items-center">
        <div className="about-content text-center">
          <h2 className="text-white">Haqqımızda Daha Ətraflı</h2>
          <p className="text-white">
            Evinizi ifadə etmək üçün 300-dən çox yol alın.
          </p>
          <Button
            className="cta-btn"
            variant="primary"
            size="lg"
            style={{
              borderRadius: "30px",
              padding: "10px 30px",
              fontSize: "18px",
            }}
          >
            <Link to="/">DAHA ÇOX</Link>
          </Button>
        </div>
      </div>

      {/* Customer  Staisfaction */}
      <section className="customer-satisfaction py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="display-6">Müştəri Məmnuniyyəti</h2>
              <p className="lead">
                Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş
                şəkildə hazırlanmış və etik qaydalara uyğun olaraq
                yaradılmışdır.
              </p>
            </Col>
          </Row>

          <Row>
            {testimonials.map((testimonial, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <div className="h-100 ">
                  <Card.Img
                    variant="top"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <Card.Body style={{ marginTop: "13px" }}>
                    <Card.Title>{testimonial.name}</Card.Title>
                    <Card.Text>{testimonial.feedback}</Card.Text>
                  </Card.Body>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
