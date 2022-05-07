import React from 'react';
import useProduct from '../../Hooks/useProducts';

const ManageInventory = () => {
    const [products, setProducts] = useProduct();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 const remaining = products.filter(service => service._id !== id);
                 setProducts(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='mt-3 text-danger text-center fw-bold fs-1 '>Manage Product</h2>
            <h3 className=' text-center'>Total Product: {products.length}</h3>
            {
                products.map(product =>
                      <div className='mt-4 product' key={product._id}>
                        <img className='w-100' src={product.img} alt="" />
                        <h4 className='mt-3'>{product.name}</h4>
                        <p className='fw-bolder fs-4'>$ {product.price}</p>
                        <p className='fst-italic p-1'><small>{product.description}</small></p>
                        <button className='btn btn-dark' onClick={() => handleDelete(product._id)}>Delete Item</button>
                    </div>)
                 
            }
        </div>
    );
};

export default ManageInventory;