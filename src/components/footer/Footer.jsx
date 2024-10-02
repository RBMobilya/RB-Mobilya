import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';

const Footer = () => {
  const sendToWhatsApp = () => {
    const message = `
      heyoooo
    `;
    const encodedMessage = encodeURIComponent(message); // URL-də düzgün şəkildə göstərilməsi üçün mesajı kodlayırıq
    const phoneNumber = "+48 573 441 958"; // Telefon nömrənizi bura əlavə edin
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // WhatsApp linkini yeni tabda açır
  };
  return (

    <>


    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Logo Section */}
          <Col xs={12} md={3} className="mb-4">
          <Link to='/'>
          <img src="/image/Footer-logo.png" alt="Logo" className="footer-logo mb-3" /> {/* Replace with your logo */}

          </Link>
          </Col>

          {/* Company Information */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">Şirkət</h5>
            <ul className="list-unstyled">
              <li><Link to='/contact'>Haqqımızda</Link></li>
              <li><Link to='/'>Müştəri xidməti</Link></li>
              <li><Link to='/'>Vakansiyalar</Link></li>
              <li><Link to='/'>Zəmanət</Link></li>
              <li><Link to='/'>Missiya</Link></li>
              <li><Link to='/'>Xəbərlər</Link></li>
            </ul>
          </Col>

          {/* Legal & Information */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">İnformasiyaya</h5>
            <ul className="list-unstyled">
              <li><Link to='/'>İstifadəçi razılaşması</Link></li>
              <li><Link to='/'>Konfidensiallıq</Link></li>
              <li><Link to='/'>Kredit və geri qaytarma şərtləri</Link></li>
              <li><Link to='/'>Oflayn alış qaydaları</Link></li>
              <li><Link to='/'>FAQ</Link></li>
              <li><Link to='/'>Bloq</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col xs={12} md={3} className="mb-4">
            <h5 className="text-warning">Əlaqə</h5>
            <ul className="list-unstyled">
              <li>Mobil nömrə: +994 123 45 67</li>
              <li>Ofis nömrəsi: (012) 234 456</li>
            </ul>
            <h5 className="text-warning">Sosial Medya</h5>
            <div className="social-icons">
              <p onClick={sendToWhatsApp} ><FaWhatsapp className="text-light mx-2" size={24} /></p>
              <p><FaInstagram className="text-light mx-2" size={24} /></p>
              <p><FaFacebook className="text-light mx-2" size={24} /></p>
            </div>
          </Col>
          {/* <Col xs={12} md={3} className="mb-4">

    
            </Col> */}

        </Row>

        {/* Footer Bottom Section */}
      
      </Container>
      {/* <Row>
          <Col className="text-center mt-4 ">
            <p className="footer-bottom-text bg-warning  py-2">
              Sədərək Ticarət Mərkəzi / Beton Yolu 12-ci sıra ilə üzbəüz, Baku, Azerbaijan
            </p>
          </Col>
        </Row> */}
    </footer>
    <div style={{color:'white'}} className="footer-bottom bg-warning text-center py-2">
        Sədərək Ticarət Mərkəzi / Beton Yolu 12-ci sıra ilə üzbə üz, Baku, Azerbaijan
      </div>
    </>

  );
};

export default Footer;