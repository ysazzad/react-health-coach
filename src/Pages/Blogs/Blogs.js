import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog-style'>
                <h3>Difference between authentication and authorization</h3>
                <p>1. authentication usually first step of a security access control and authorization
                    usually comes after authentication.
                </p>
                <p>2. authentication verifies the users identity and authorization grants or denies permissions to the user to do something</p>
                <p> 3.authentication changeable by the user and authorization can not be changed by the user </p>
                <p>4. authentication visible by the user and authorization is not visible by the user</p>
                <p>5. Usually done before authorization and usually done after successful authentication.
                </p>
            </div>
            <div className='blog-style'>
                <h3> Why are you using firebase? what other options do you have to implement authentication?</h3>
                <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps</p>
                <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.</p>
                <p>You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud.</p>
                <p>Firebase removes the need to worry about the technicalities of cloud server configuration.</p>

            </div>
            <div className='blog-style'>
                <h3>What other services does firebase provide other than authentication?</h3>
            </div>

        </div>
    );
};

export default Blogs;