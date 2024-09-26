import React from 'react';
import { useParams } from 'react-router-dom'; // To get id or name from URL
import { products } from '../data/Data'; // Importing product data
import ProductDetails from './ProductDetails';
import { Container, Row, Col } from 'react-bootstrap';
import ImageGallery from './ImageGallery';
import SimilarProducts from './SimilarProducts';

const SingleProductPage = () => {
  const { id,colorName } = useParams(); // Assuming we pass the product id in the URL

  // Find the product based on the ID passed in the URL
  const product = products.find((prod) => prod.id === parseInt(id));
    // Əgər rəng URL-də varsa, onu tapırıq; əks halda default rəngi və ya rəngsiz məhsul göstəririk
    const selectedColor = product.colors.find((color) => color.name === colorName) || null;
    // Əgər rəng seçilməyibsə, default olaraq defaultImage göstərilsin
    const defaultImageToShow = selectedColor ? selectedColor.defaultColorImage : product.defaultImage;
    const imagesToShow = selectedColor ? selectedColor.images : product.images;
  // If no product found, handle it gracefully
  if (!product) {
    return <h2>Product not found</h2>;
  }
console.log(`colorun sey suyu ${selectedColor.defaultColorImage}`);

  
  return (
    <Container>
      <Row>
        <Col md={7}>
          {/* Image Gallery */}
          <ImageGallery defaultImage={defaultImageToShow} images={imagesToShow}  />
        </Col>
        <Col md={5}>
          {/* Product Details */}
          <ProductDetails product={product} selectedColor={selectedColor} 
             />
        </Col>
      </Row>
      <hr />
      {/* Similar Products */}
      {product && <SimilarProducts currentProduct={product} />} 
    </Container>
  );
};

export default SingleProductPage;
