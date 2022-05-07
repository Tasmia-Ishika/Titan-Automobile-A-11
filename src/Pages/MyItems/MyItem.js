import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProduct from '../../Hooks/useProducts';


const MyItem = () => {
    const [products] = useProduct();
    const [user] = useAuthState(auth);
    return (
        <div className='w-50 mx-auto fs-3'>
              <h2>Your Selected Items</h2>
            {
             products.map(product => <div key={product._id}>{product.name}</div>)
            }

        </div>
    );
};

export default MyItem;