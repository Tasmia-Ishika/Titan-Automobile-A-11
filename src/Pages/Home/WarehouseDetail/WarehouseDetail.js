import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
const WarehouseDetail = () => {
    return (
        <div className='rounded bg-dark text-white m-5 p-5 border-start-0'>
            <div>
                <h4>How It Works?</h4>
                <h1>Your Adventure is Your Life</h1>
                <p>Experience new journeys of your life with us.We are simply here for you to provide any service anytime.Book our InStocks cars on very good deal including our 2 years of services.</p>
                <a className='btn btn-danger  rounded-pill' href="https://www.youtube.com/watch?v=BvUXeP8cnBM"><HiLightBulb></HiLightBulb> Learn More</a>
            </div>
            <br />
        </div>
    );
};

export default WarehouseDetail;