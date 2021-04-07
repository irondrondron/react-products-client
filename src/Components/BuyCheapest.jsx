import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalActive } from '../Redux/Actions/modal';
import { setSelectedObject } from '../Redux/Actions/object';

const BuyCheapest = ({ cheapestProduct }) => {
  const dispatch = useDispatch();
  return (
    <div className="BuyCheapest">
      <button
        onClick={(e) => {
          dispatch(setSelectedObject(cheapestProduct));
          dispatch(toggleModalActive(true));
        }}
        className="BuyCheapest__button"
      >
        Buy cheapest
      </button>
    </div>
  );
};

export default BuyCheapest;
