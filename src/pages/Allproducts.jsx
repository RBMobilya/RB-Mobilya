import React, { useEffect, useState } from 'react';
import { products, categories,Mycolors } from '../data/Data'; // Centralized data
import Filters from './Filters';  // Separate Filters component
import Product from './Product';  // Separate Product component
import '../pages/Products.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const Allproducts = () => {
  const { categoryName } = useParams();
  useEffect(() => {
    if (categoryName) {
      setFilters((prev) => ({ ...prev, category: categoryName }));
    }
  }, [categoryName]);

  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice:8000,
    color: ''
  });
  // Filter products based on selected filters
  const filteredProducts = (products || []).filter((product) => {
    const categoryMatch = filters.category === '' || product.category === filters.category;
    const priceMatch = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const colorMatch = filters.color === '' || product.colors.some(c => c.name === filters.color);
    return categoryMatch && priceMatch && colorMatch;
  });

  return (
    <Container>
    <h2>All Products</h2>   

 <div className='all-products-page '>

     <Filters filters={filters} setFilters={setFilters} categories={categories} Mycolors={Mycolors} />

      
      <div className="products-grid" >
        { filteredProducts.length>0?(
          <div className='row'>
          {
           filteredProducts.map((product) => (
             <div key={product.id} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
              <Product  product={product} />

             </div>
               ))
           }
          </div>
          
        ) :(
          <div className="no-products">
      <h4>No products found in this category.</h4>
    </div>
        ) }
      </div>
   
    </div>
    </Container>
  
      
  );
};

export default Allproducts;
