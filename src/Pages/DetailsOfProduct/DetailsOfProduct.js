import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import { Link, useParams } from 'react-router-dom';


const DetailOfProduct = () => {
  const { detailId } = useParams();

  const [products, setProducts] = useContext(ProductContext);


  const product = products.find(product => product.id == detailId);


  return (
    <div>
      <h1 className='mt-4 text-dark fw-bold fs-1 text-center'>{product?.name}</h1>
      <div className='text-center'>
        <div>
          <img className='w-50 mt-3' src={product?.img} alt="" />
          <h2 className=' fw-bold fs-1 '> ${product?.price}</h2>
          <h5 className='mt-3'>InStock: {product?.stock}</h5>
          <h5 className='mt-3'>Supplied by: {product?.supplier}</h5>
          <p className='p-4 m-4 fst-italic'>{product?.description}</p>
        </div>
        <Link to="/checkout">
          <button className='btn btn-dark fw-bold'>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default DetailOfProduct;