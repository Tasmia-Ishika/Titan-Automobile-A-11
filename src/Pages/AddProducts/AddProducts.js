import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-4 mt-4 text-center text-danger fw-bold'>Add New Items</h2>
            <h3 className='mb-4 mt-4 text-center text-dark fw-bold'>User Email: {user.email}</h3>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='InStock' type="number" {...register("stock")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-dark fw-bold' type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default AddProducts;