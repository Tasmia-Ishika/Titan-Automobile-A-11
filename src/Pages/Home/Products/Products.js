import React, { useContext, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css';
import { ProductContext } from '../../../App'; 

const Products = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useContext(ProductContext);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id="products" className='container'>
            <div className="row">
                <h1 className='text-dark fw-bold text-center mt-5 mb-5'>Instore Cars</h1>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;