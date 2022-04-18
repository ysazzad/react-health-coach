import React from 'react';
import './MoreInfo.css'

const MoreInfo = () => {
    return (
        <div className='more-info'>
            <div className='text' >
                <h3 className='text-secondary'>3 months with a Health Coach</h3>
                <p>Start working on your body today, and with our individual fitness program, <br /> already in 90 days you will see a totally different girl/boy in the mirror!</p>
                <button className='btn btn-outline-success'>More Info</button>

            </div>
            <div className='image-style'>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVex4AeyjLVgB1Xsb10t7Hx65FGcs7eQunrw&usqp=CAU" alt="" /> */}
                <img src="https://brooklynfarmgirl.com/wp-content/uploads/2020/12/Healthy-Green-Juice-Featured-Image.jpg" alt="" />
            </div>



        </div>
    );
};

export default MoreInfo;