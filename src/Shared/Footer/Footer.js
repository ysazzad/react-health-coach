import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5 bg-dark text-success p-4'>
            <p> &copy; {year} Health Coach </p>

        </footer>
    );
};

export default Footer;