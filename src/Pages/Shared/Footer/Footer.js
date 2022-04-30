import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-dark text-center text-white  mt-5'>
            <p>Copyright ©️{year} All rights reserved</p>
        </footer>
    );
};

export default Footer;