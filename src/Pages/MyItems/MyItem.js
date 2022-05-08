import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../Hooks/useProducts';


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
    return (
        <div className='w-50 mx-auto fs-3'>
            <h2>Your Selected Items: {products.length}</h2>


        </div>
    );
};

export default MyItem;