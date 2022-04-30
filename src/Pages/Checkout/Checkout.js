import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }



    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }

    const checkoutBtn = () => {
        if (Checkout) {
            toast('Thanks for the Purchase. Hoping you will get delivery within 2 days.')
        }
    }
    return (
        <div className='form-container register-form'>
            <div style={{ margin: "20px" }}>
                <h2 className='form-title text-dark'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">

                        <input className='mt-3   ' onBlur={handleNameBlur} type="text" name="name" id="" placeholder='Name' />
                    </div>
                    <div className="input-group">

                        <input className='mt-3' value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>

                        <input className='mt-3' onBlur={handleAddressBlur} type="text" name="Address" id="" placeholder='Address' required />
                    </div>
                    <div className='input-group'>

                        <input className='mt-3' onBlur={handlePhoneBlur} type="text" name="Phone" id="" placeholder='Phone' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input onClick={checkoutBtn} className='form-submit btn btn-dark' type="submit" value="Checkout" />
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Checkout;