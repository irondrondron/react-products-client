import React from 'react';
import { toUpper } from '../Utils/toUpper';

const ProductInfo = ({ product }) => {
  return (
    <div className="Card__info">
      <p className="Card__category">{product.category}</p>
      <p className="Card__name">{toUpper(product.name)}</p>
      <div className="Card__price">
        <sup className="Card__price--currency">$</sup>
        <p className="Card__price--value">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductInfo