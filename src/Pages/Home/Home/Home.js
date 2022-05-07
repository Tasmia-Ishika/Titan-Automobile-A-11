import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import WarehouseDetail from '../WarehouseDetail/WarehouseDetail';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <WarehouseDetail></WarehouseDetail>
          <Products></Products>
        </div>
    );
};

export default Home;