import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../App';
import { Link, useParams } from 'react-router-dom';


const DetailOfProduct = () => {
  const { detailId } = useParams();

  const [products, setProducts] = useState({});


  useEffect(() => {
    const url = `http://localhost:5000/products/${detailId}`

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])


  return (
    <div>
      <h1 className='mt-4 text-dark fw-bold fs-1 text-center'>{products?.name}</h1>
       <div className='text-center'>
        <div>
          <img className='w-50 mt-3' src={products?.img} alt="" />
          <h2 className=' fw-bold fs-1 '> ${products?.price}</h2>
          <h5 className='mt-3'>InStock: {products?.stock}</h5>
          <h5 className='mt-3'>Supplied by: {products?.supplier}</h5>
          <p className='p-4 m-4 fst-italic'>{products?.description}</p>
        </div>
        <Link to="/checkout">
          <button className='btn btn-dark fw-bold'>Proceed to Checkout</button>
        </Link>
      </div> 
    </div>
  );
};

export default DetailOfProduct;