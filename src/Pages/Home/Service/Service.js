import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    console.log(service);
    const { id, name, img, price, description } = service
    return (
        <div className='service-info'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <Link to='/checkout' className='btn btn-outline-success ' >Buy Now</Link>

        </div>
    );
};

export default Service;