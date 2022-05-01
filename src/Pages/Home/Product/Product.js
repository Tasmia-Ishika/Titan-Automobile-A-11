import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const {_id, name, stock, supplier, img, description, price } = product;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    const navigateToDetails = id => {
        navigate(`/detail/${id}`);
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2 className='mt-2'>{name}</h2>
            <p className='fw-bolder fs-4'>$ {price}</p>
            <p className='fw-bolder fs-6'>InStock: {stock}</p>
            <p className='fst-italic p-1'><small>{description}</small></p>
            <p>Supplied by : {supplier}</p>
            <div className='d-flex text-center mx-auto justify-content-around'>
                <div>
                    <button onClick={() => navigateToDetails(_id)} className='btn btn-dark mb-3 fw-bold'>Book Now</button>
                </div>
                <div>
                    <button onClick={() => navigateToInventory(_id)} className='btn btn-dark mb-3 fw-bold'>Update</button>
                </div>
            </div>

        </div>
    );
};

export default Product;