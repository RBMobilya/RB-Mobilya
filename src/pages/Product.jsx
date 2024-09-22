import React, { useState } from 'react';
import './Products.css';
const Product = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.defaultImage);
  const [selectedColor, setSelectedColor] = useState(0);

 
 
  const handleColorChange = (image,index) => {
    setSelectedImage(image);
    setSelectedColor(index);

  };

  return (
    <div className="product-card h-100">
    <img style={{background:' linear-gradient(0deg, white 0%, white 100%)',width:'100%'}} src={selectedImage} alt={product.name} />
      
      <div className="card-body text-center">
      <h5>{product.name}</h5>
      <p>{product.price} ₼</p>
      <div className="colors">
        {product.colors.map((color,index) => (
          <button
          
          className={`color-circle ${index === selectedColor ? 'active' : ''}`}
            key={color.name}
            style={{ backgroundColor: color.code }}
            onClick={() => handleColorChange(color.image,index)}
          ></button>
        ))}
      </div>
      </div>
     
      
    </div>
  );
};

export default Product;
