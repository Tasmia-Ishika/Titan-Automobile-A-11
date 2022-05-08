import React from 'react';
import logos from '../../images/CarLogos/carLogos.png';
import { HiLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const CarLogos = () => {
    return (
        <div>
            <div className='rounded bg-dark text-white mt-5 p-5 border-start-0'>
                <h2 className='p-2 m-3'>Why From Us?</h2>
                <h1 className='p-2 m-3'>We Provide Quality with Excellency in Every Journey</h1>
                <p className='p-2 m-3 fs-5'>All Our Brands in Single View. Get 3 years warehouse service only from us.</p>
                <div className='text-center'>
                    <img className='mt-2 p-4 w-100' src={logos} alt="" />
                </div>
                <br />
                <button className='btn btn-danger m-4  rounded-pill'><HiLightBulb></HiLightBulb> Learn More</button>
            </div>
        </div>
    );
};

export default CarLogos;