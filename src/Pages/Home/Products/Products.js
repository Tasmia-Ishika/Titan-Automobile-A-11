import React, {  useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-dark fw-bold text-center mt-5 mb-5'>Instore</h1>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;