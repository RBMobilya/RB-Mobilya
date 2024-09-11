import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Card, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const backgroundSlides = [
    { description1: "Seçiminiz Sizin Haqqınızda Çox Şey Deyir.", description2: "Evinizi ifadə etmək üçün 300-dən çox yol alın.", backgroundImg: '/image/sliderimage1.png', buttonName: 'İNDİ AL' },
    { description1: "Yeni Məhsullar Kəşf Edin", description2: "Evinizi bəzəmək üçün unikal seçimlər", backgroundImg: '/image/sliderimage2.png', buttonName: 'İNDİ AL' },
    { description1: "İlham Verici Dekor", description2: "Dəblə uyğun gələn dekorasiya məhsulları", backgroundImg: '/image/sliderimage3.png', buttonName: 'İNDİ AL' },
    // Add more slides as necessary
  ];
  const bestseller = [
    { title: 'Xalçalar', description: 'Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.', image: '/image/Xalcalar.png' },
    { title: 'Üzlüklər', description: 'Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.', image: '/image/Uzlukler.png' },
    { title: 'Aksesuarlar', description: 'Onlarla xalça üslubunu araşdırmaq və seçmək üçün seçimlər.', image: '/image/Aksesuarlar.png' },
  ];

  const products = [
    {
      title: 'Barcelona Oturacağı',
      price: '250 ₼',
      image: '/image/product1.png', // replace with actual image paths
    },
    {
      title: 'Jacobsen Oturacağı',
      price: '109 ₼',
      image: '/image/product2.png',
    },
    {
      title: 'Adirondack Oturacağı',
      price: '99 ₼',
      image: '/image/product3.png',
    },
    {
      title: 'Herman Miller Aeron Oturacağı',
      price: '299 ₼',
      image: '/image/product4.png',
    },
    {
      title: 'Eames Lounge Kreslosu',
      price: '450 ₼',
      image: '/image/product5.png',
    },
  ];
  const  categories = [
    {
      title: 'Ofis',
      image: '/image/ofis.png', // Replace with actual image paths
    },
    {
      title: 'Mətbəx',
      image: '/image/metbex.png',
    },
    {
      title: 'Outdoor',
      image: '/image/outdoor.png',
    },
    {
      title: 'Chesterfield',
      image: '/image/chesterfield.png',
    },
    {
      title: 'Vintage',
      image: '/image/vintage.png',
    },
  ];

  const testimonials = [
    {
      name: 'Araz M.',
      feedback: 'Bu Scandinavian yan stolu çox funksionaldır. Kiçik, lakin geniş saxlama yerinə malikdir. Dizaynı isə minimalistdir və evimdəki bütün əşyalarla uyğun gəlir.',
      image: '/image/comment1.png', // Replace with actual image paths
    },
    {
      name: 'Nigar Ə.',
      feedback: 'Bu mid-century modern kafe masasını çox funksionaldır və dizaynı ilə göz oxşayır. Qonaq otağımda həm praktik, həm də dekorativ məqsədlə istifadə edirəm.',
      image: '/image/comment2.png',
    },
    {
      name: 'Yusif F.',
      feedback: 'Aldığım Chesterfield divanı çox rahatdır və oturma otağımı zərif vurğu naxışına çevirdi. Dəri materialı çox keyfiyyətlidir və işlənməsi mükəmməldir.',
      image: '/image/comment3.png',
    },
  ];

const Home=()=>{
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundSlides.length); // Looping the slides
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, []);




return(
// Hero Section 
<>
    <div className="hero-section d-flex justify-content-center align-items-center" style={{ height: '100vh', position: 'relative' }}>
      <img
        src={backgroundSlides[currentSlide].backgroundImg}
        alt="Background"
        className="hero-image"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}
      />

      <div className="hero-content text-center">
        <h1 className="display-4 text-white" style={{ fontWeight: 'bold' }}>
          {backgroundSlides[currentSlide].description1}
        </h1>
        <p className="text-white lead">
          {backgroundSlides[currentSlide].description2}
        </p>
      <Button
        className="cta-btn"
        variant="primary"
        size="lg"
        style={{ borderRadius: '30px', padding: '6px 30px', fontSize: '20px',background:"white",fontFamily:"mulish" }}
      >
        İNDİ AL 
      </Button>
    </div>
  </div>  
{/* //Section 1  */}

<section className="section1" style={{ padding: '50px 0', backgroundColor: '#f8f9fa' }}>
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 style={{fontFamily:'Space Grotesk',fontSize:'40'}} className="display-5">Rahatlıq və Harmoniyanı Öz Evində Birləşdir</h2>
            <p style={{fontFamily:'Space Grotesk',fontSize:'18',color:'#7F7F7F'}} className="lead">Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş şəkildə hazırlanmış və etik qaydalara uyğun olaraq yaradılmışdır.</p>
          </Col>
        </Row>

        <Row>
          {bestseller.map((bestsell, index) => (
            <Col key={index} xs={12} md={4} className="mb-4">
              <Card className="border-0 text-white">
                <Card.Img style={{filter:'brightness(80%)'}} src={bestsell.image} alt={bestsell.title} />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                  <Card.Title className="fw-bold">{bestsell.title}</Card.Title>
                  <Card.Text>{bestsell.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
{/* Section 2 En Cox Satilan  */}

<section style={{background:'#f8f9fa;'}} className="product-section py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-6">Ən Çox Satılan Məhsullar</h2>
            <p className="lead">
              Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş şəkildə hazırlanmış və etik qaydalara uyğun olaraq yaradılmışdır.
            </p>
          </Col>
        </Row>

        <Row>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4 custom-col">
              <Card className="h-100 border-0 shadow">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text style={{color:'#E6AA04'}} className="mt-auto  fw-bold">{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

{/* Hero banner 2  */}

<div className="section-4 d-flex justify-content-center align-items-center">
      <div className="section4-content text-center">
        {/* <h1 className="text-white display-5">Yeni Kampaniyalar Artıq Əlçatandır</h1>
        <p className="text-white lead">
          Evinizi ifadə etmək üçün 300-dən çox yol alın.
        </p> */}
        {/* <Button
          className="cta-btn"
          variant="light"
          size="lg" 
          style={{ borderRadius: '30px', padding: '10px 30px', fontSize: '18px' }}
        >
          DAHA ÇOX
        </Button> */}
      </div>
</div>
{/* Categories */}
<section className="category-section py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-6">Kateqoriyalar</h2>
            <p className="lead">
              Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş şəkildə hazırlanmış və etik qaydalara uyğun olaraq yaradılmışdır.
            </p>
          </Col>
        </Row>

        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4 custom-col">
              <Card className="h-100 border-0 shadow text-center">
                <Card.Img variant="top" src={category.image} alt={category.title} />
                <Card.Body>
                  <Card.Title className="fw-bold">{category.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
{/* About section  */}
<div className="about-section d-flex justify-content-center align-items-center">
      <div className="overlay"></div>
      <div className="about-content text-center">
        {/* <h2 className="text-white">Haqqımızda Daha Ətraflı</h2>
        <p className="text-white">Evinizi ifadə etmək üçün 300-dən çox yol alın.</p>
        <Button
          className="cta-btn"
          variant="light"
          size="lg"
          style={{ borderRadius: '30px', padding: '10px 30px', fontSize: '18px' }}
        >
          DAHA ÇOX
        </Button> */}
      </div>
</div>

{/* Customer  Staisfaction */}
<section className="customer-satisfaction py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-6">Müştəri Məmnuniyyəti</h2>
            <p className="lead">
              Eviniz üçün dünyanın ən qəşəng malları. Hamısı düşünülmüş şəkildə hazırlanmış və etik qaydalara uyğun olaraq yaradılmışdır.
            </p>
          </Col>
        </Row>

        <Row>
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="h-100 ">
                <Card.Img variant="top" src={testimonial.image} alt={testimonial.name} />
                <Card.Body>
                  <Card.Title className="fw-bold">{testimonial.name}</Card.Title>
                  <Card.Text className="text-muted">{testimonial.feedback}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>


</>
);
}

export default Home; 