import React from 'react';
import useProduct from '../../Hooks/useProducts';


const MyItem = () => {
    const [products] = useProduct();

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