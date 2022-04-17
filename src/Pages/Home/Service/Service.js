import React from 'react';
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
            <button className='btn btn-outline-success '>Buy Now</button>

        </div>
    );
};

export default Service;