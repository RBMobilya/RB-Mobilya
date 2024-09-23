import React, { useState } from 'react';
import { Button, Form, Badge, Row, Col } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === 'increase') {
        return prevQuantity + 1;
      }
      if (action === 'decrease' && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>
        <strong>{product.price} ₼</strong>
      </p>
      <p>{product.description}</p>

      <div>
        <h5>Məhsulun Rəngi</h5>
        <div className="color-options">
          {product.colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color.code,
                height: '30px',
                width: '30px',
                display: 'inline-block',
                marginRight: '10px',
                borderRadius: '50%',
              }}
            />
          ))}
        </div>
      </div>

      <Row className="my-3">
        <Col>
          <strong>Çatdırılma:</strong> {product.delivery}
        </Col>
        <Col>
          <strong>Stokda var:</strong> {product.inStock ? 'Bəli' : 'Xeyr'}
        </Col>
        <Col>
          <strong>Qalant:</strong> {product.quantityAvailable}
        </Col>
      </Row>

      {/* Quantity control */}
      <div className="quantity-control">
        <Button onClick={() => handleQuantityChange('decrease')}>-</Button>
        <span className="mx-2">{quantity}</span>
        <Button onClick={() => handleQuantityChange('increase')}>+</Button>
      </div>

      {/* Add to cart and wishlist buttons */}
      <div className="mt-3">
        <Button variant="success" className="me-2">
          Whatsapp-a keçid edin
        </Button>
        <Button variant="outline-danger">
          <i className="bi bi-heart"></i> Seçilmişlərə əlavə et
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
