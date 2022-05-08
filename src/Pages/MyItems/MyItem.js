import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    useEffect(() => {
        const getItem = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            console.log(url)
            const { data } = await axios.get(url)
            setProducts(data);
        }
        getItem();
    }, [user.email, setProducts])

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
        <div className='w-50 mx-auto fs-3'>
            <h2>Your Selected Items: {products.length}</h2>
            {
                    products.map(product =>
                        <div className='mt-4 product' key={product._id}>
                            <img className='w-100' src={product.img} alt="" />
                            <h4 className='mt-3'>{product.name}</h4>
                            <p className='fw-bolder fs-4'>$ {product.price}</p>
                            <p className='fst-italic p-1'><small>{product.description}</small></p>
                            <button className='btn btn-dark  mt-3 fw-bold' onClick={() => handleDelete(product._id)}>Delete Item  <MdDeleteOutline></MdDeleteOutline></button>
                            <br />
                            
                        </div>)
                }
            


        </div>
    );
};

export default MyItem;