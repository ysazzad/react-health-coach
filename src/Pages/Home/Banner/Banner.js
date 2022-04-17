
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'



const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "600px" }}
                        src="https://bia.ca/wp-content/uploads/2020/12/Happy-man.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Inspiring you to live a healthier lifestyle</h3>
                        <h1> Hi! I am Smith</h1>
                        <h5>Your health Advisor .</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%", height: "600px" }}
                        src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBtZW58ZW58MHx8MHx8&w=1000&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h3>Inspiring you to live a healthier lifestyle</h3>
                        <h1> Hi! I am Smith</h1>
                        <h5>Your new personal coach for better life .</h5>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Banner;