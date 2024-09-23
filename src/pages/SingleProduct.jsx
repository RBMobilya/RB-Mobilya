import React from 'react';
import { useParams } from 'react-router-dom'; // To get id or name from URL
import { products } from '../data/Data'; // Importing product data
import ProductDetails from './ProductDetails';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from './ImageGallery';
import SimilarProducts from './SimilarProducts';

const SingleProductPage = () => {
  const { id } = useParams(); // Assuming we pass the product id in the URL

  // Find the product based on the ID passed in the URL
  const product = products.find((prod) => prod.id === parseInt(id));

  // If no product found, handle it gracefully
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          {/* Image Gallery */}
          <ImageGallery images={product.colors.map((color) => color.image)} />
        </Col>
        <Col md={8}>
          {/* Product Details */}
          <ProductDetails product={product} />
        </Col>
      </Row>
      <hr />
      {/* Similar Products */}
      {product && <SimilarProducts currentProduct={product} />} 
    </Container>
  );
};

export default SingleProductPage;
