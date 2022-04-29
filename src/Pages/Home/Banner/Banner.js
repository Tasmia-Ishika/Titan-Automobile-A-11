import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Get 25% off in Audi on First Purchase</h2>
                  <p className='fw-bold'>Use code "MyAudi" to apply for your discount.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>New Edition Lamborghini is now available in our stock!!</h3>
                  <p className='fw-bold'>Book your's from first slot before our stock runs out.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Book any car from us only at 40% cost!</h3>
                  <p className='fw-bold'>
                    We offer upto 5 years of installment on EMI
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          
          );
};

export default Banner;