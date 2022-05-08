import React from 'react';
import useProduct from '../../Hooks/useProducts';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const ManageInventory = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProduct();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `https://whispering-spire-22229.herokuapp.com/products/${id}`;
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


    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
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
                        <button className='btn btn-dark  mt-3 fw-bold' onClick={() => handleDelete(product._id)}>Delete Item  <MdDeleteOutline></MdDeleteOutline></button>
                        <br />
                        <button onClick={() => navigateToInventory(product._id)} className='btn btn-dark mt-3 fw-bold'>Update Items <MdOutlineSystemUpdateAlt></MdOutlineSystemUpdateAlt></button>
                    </div>)
            }
        </div>
    );
};


export default ManageInventory;