import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-dark text-center text-white  mt-5'>
            <h3>Contact us on </h3>
            <h3><FiPhoneCall></FiPhoneCall> <BsInstagram></BsInstagram> <BsFacebook></BsFacebook> <BsYoutube></BsYoutube></h3>
            <p>Copyright ©️{year} All rights reserved by Titan Automobiles.</p>
            <p>Created by Ishika</p>
        </footer>
    );
};

export default Footer;