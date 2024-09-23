import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { products } from '../data/Data'; // Assuming products are imported from the data file
import { Link } from 'react-router-dom';

const SimilarProducts = ({ currentProduct }) => {
  // Filter products that have the same category as the current product
  if (!currentProduct || !currentProduct.category) {
    return null; // Return nothing if currentProduct or its category is undefined
  }

  // Filter products that have the same category as the current product
  const similarProducts = products.filter(
    (product) =>
      product.category === currentProduct?.category && product.id !== currentProduct.id
  );

  return (
    <div>
      <h3>Oxşar Məhsullar</h3>
      <Row>
        {similarProducts.slice(0, 4).map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-3">
          {console.log(product.category)}

            <Card>
              <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.defaultImage} alt={product.name} />
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price} ₼</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimilarProducts;
