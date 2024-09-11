import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Logo Section */}
          <Col xs={12} md={4} className="mb-4">
            <img src="/image/Footer-logo.png" alt="Logo" className="footer-logo mb-3" /> {/* Replace with your logo */}
          </Col>

          {/* Company Information */}
          <Col xs={12} md={2} className="mb-4">
            <h5 className="text-warning">Şirkət</h5>
            <ul className="list-unstyled">
              <li><a href="#">Haqqımızda</a></li>
              <li><a href="#">Müştəri xidməti</a></li>
              <li><a href="#">Vakansiyalar</a></li>
              <li><a href="#">Zəmanət</a></li>
              <li><a href="#">Missiya</a></li>
              <li><a href="#">Xəbərlər</a></li>
            </ul>
          </Col>

          {/* Legal & Information */}
          <Col xs={12} md={2} className="mb-4">
            <h5 className="text-warning">İnformasiyaya</h5>
            <ul className="list-unstyled">
              <li><a href="#">İstifadəçi razılaşması</a></li>
              <li><a href="#">Konfidensiallıq</a></li>
              <li><a href="#">Kredit və geri qaytarma şərtləri</a></li>
              <li><a href="#">Oflayn alış qaydaları</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Bloq</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={2} className="mb-4">
            <h5 className="text-warning">Əlaqə</h5>
            <ul className="list-unstyled">
              <li>Mobil nömrə: +994 123 45 67</li>
              <li>Ofis nömrəsi: (012) 234 456</li>
            </ul>
         
          </Col>
          <Col xs={12} md={2} className="mb-4">

          <h5 className="text-warning">Sosial Medya</h5>
            <div className="social-icons">
              <a href="#"><FaWhatsapp className="text-light mx-2" size={24} /></a>
              <a href="#"><FaInstagram className="text-light mx-2" size={24} /></a>
              <a href="#"><FaFacebook className="text-light mx-2" size={24} /></a>
            </div>
            </Col>

        </Row>

        {/* Footer Bottom Section */}
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-bottom-text text-warning">
              Sədərək Ticarət Mərkəzi / Beton Yolu 12-ci sıra ilə üzbəüz, Baku, Azerbaijan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;