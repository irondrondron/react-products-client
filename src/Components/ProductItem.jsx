import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalActive } from '../Redux/Actions/modal';
import { setSelectedObject } from '../Redux/Actions/object';
import ProductInfo from './ProductInfo';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="Card__item" key={product._id}>
      <div className="Card__wrapper">
        <ProductInfo product={product} />
        <button
          className="Card__button"
          onClick={() => {
            dispatch(setSelectedObject(product));
            dispatch(toggleModalActive(true));
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
