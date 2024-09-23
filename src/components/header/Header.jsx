import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link } from 'react-router-dom';
import { categories } from '../../data/Data';
const Header = ({ onSearch }) => {
// console.log(categories);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm);  // Trigger the search action
    };
  return (
    <header className="header  bg-light "style={{position:"realtive"}}>

<div style={{width: '100%', height: '100%', paddingTop: 12, paddingBottom: 11.50, background: '#FFBB00', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
   <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
     <div style={{width: 123, height: 16, textAlign: 'center', color: 'white', fontSize: 14, fontFamily: 'Gilroy-Medium', fontWeight: '400', wordWrap: 'break-word'}}>Yeni Kampaniyalar</div>
       <div style={{width: 16.50, height: 16.50, position: 'relative'}}>
         <div style={{width: 11, height: 5.50, left: 2.75,top:-2,position: 'absolute'}}> <TrendingFlatIcon style={{color:"white"}}/> </div>
     </div>
  </div>
</div>

      <Container className='py-3'>
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col md={3}>
            <a href="#" className="navbar-brand">
           <Link to='/'>
            <img src="/image/logo.png" alt="Logo" style={{ height: '40px' }} />

            </Link>
            </a>
          </Col>
{/* təklifler məhsullar əlaqə */}
           <Col md={6}>
           <div  style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
             <div style={{width: 104 ,height: 16, textAlign: 'center', color: '#7F7F7F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Xüsusi Təkliflər</div>
             <Link to='/products' style={{width: 72, height: 16,textDecoration:'none' ,textAlign: 'center', color: '#7F7F7F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Məhsullar</Link>
             <Link to='/contact' style={{width: 43 ,height: 16,textDecoration:"none", textAlign: 'center', color: '#7F7F7F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Əlaqə</Link>
           </div>
          </Col>
          {/* Search Bar Section */}
          <Col md={3}>
          <Form onSubmit={handleSearch} className="d-flex justify-content-center">
      <InputGroup className="search-bar" style={{ maxWidth: '600px', borderRadius: '50px', overflow: 'hidden' }}>
        <Form.Control
          type="text"
          placeholder="Axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0"
          style={{ backgroundColor: '#f5f5f5', borderRadius: '30px' }}
        />
        <Button type="submit" variant="outline-secondary" className="border-0" style={{ backgroundColor: '#f5f5f5' }}>
          <SearchIcon />
        </Button>
      </InputGroup>
    </Form>
          </Col>

          {/* User Controls (Language, Login, Cart) */}
        </Row>
      </Container>

      {/* Navbar - could be a separate component if preferred */}
      <Container fluid className="bg-white">
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg navbar-light">
              <Container>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul style={{width: '100%', height: '100%',justifyContent: 'flex-start', alignItems: 'center', gap: 60, display: 'inline-flex'}}className="navbar-nav">
                  {
                    categories.map((catgory)=>(
                      <li key={catgory.id} className="nav-item">
                        <Link to={`/products/category/${catgory.name}`} style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}} className="nav-link"  >
                         {catgory.name}
                         </Link>
                      </li>
                    ))
                  }
                    
                   
                    {/* Add more nav items as necessary */}
                  </ul>
                </div>
              </Container>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
