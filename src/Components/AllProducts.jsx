import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../GraphQL/Queries';
import Modal from './Modal';
import { useSelector } from 'react-redux';
import FormOrder from './Forms/FormOrder';
import ProductInfo from './ProductInfo';
import ProductItem from './ProductItem';
import BuyCheapest from './BuyCheapest';

const AllProducts = () => {
  const { data, loading } = useQuery(GET_ALL_PRODUCTS);
  const selectedObject = useSelector((state) => state.object.selectedObject);

  // const cheapestProduct = data.getAllProducts.reduce((prev, current) =>
  //   prev.price < current.price ? prev : current
  // );

  return (
    <div className="container">
      {loading && <div className="Loader">Loading...</div>}

      {!loading && data.getAllProducts && (
        <div className="Card">
          {data.getAllProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
          <Modal>
            {selectedObject && (
              <>
                <ProductInfo product={selectedObject} />
                <FormOrder />
              </>
            )}
          </Modal>

          <BuyCheapest
            cheapestProduct={data.getAllProducts.reduce((prev, current) =>
              prev.price < current.price ? prev : current
            )}
          />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
