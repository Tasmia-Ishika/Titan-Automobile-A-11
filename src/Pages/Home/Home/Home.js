import React from 'react';
import CarLogos from '../../CarLogos/CarLogos';
import SectionSecond from '../../SectionSecond/SectionSecond';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import WarehouseDetail from '../WarehouseDetail/WarehouseDetail';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <WarehouseDetail></WarehouseDetail>
          <SectionSecond></SectionSecond>
          <Products></Products>
          <CarLogos></CarLogos>
        </div>
    );
};

export default Home;