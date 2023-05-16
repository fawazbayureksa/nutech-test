import React from 'react';
import Navbar from './navbar';

const Template = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                {children}
            </div>
            <div>
                {/* <h3>
                    Footer
                </h3> */}
            </div>
        </div>

    );
}

export default Template;
