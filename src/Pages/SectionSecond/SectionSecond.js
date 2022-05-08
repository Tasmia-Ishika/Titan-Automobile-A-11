import React from 'react';
import {FiAlertOctagon} from 'react-icons/fi';
const SectionSecond = () => {
    return (
        <div className='bg-dark m-4 p-4'>
            <h1 className=' fw-bold text-light text-center'> Featured Cars</h1>
            <div className='d-inline'>
                <div className='text-center m-4 p-4'>
                    <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCe8WklcXtTe90qOB5zqsOoeOzvCH_TeIuDBmU7VqZXT-Afh-REa1GyvbL6oCnUP-kKU&usqp=CAU" alt="" />
                    <br />
                    <p className='fsw-italic text-light fw-bold'>New Edition Rolls Royce will soon be InStore.</p>
                </div>
                <div className='text-center m-4 p-4'>
                    <img className='w-100 mb-2' src="https://pictures.topspeed.com/IMG/crop/202012/ferrari-458-speciale-2_800x0w.jpg" alt="" />
                    <p className='fsw-italic text-light fw-bold'>Ferrari coming this July in our Stock.</p>
                </div>
            </div>
            <div className='text-center'>
            <button className='btn btn-danger rounded-pill fw-bold'>Alert Me <FiAlertOctagon></FiAlertOctagon></button>
            </div>
        </div>
    );
};

export default SectionSecond;