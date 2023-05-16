import React from 'react';

const Template = ({ children }) => {
    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className="sidebar">
                    <h3 className='brand-dashbord'>Shopi</h3>
                    <ul>
                        <li><a href="/product">Product</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                        <li><a href="#">Menu 4</a></li>
                        <li><a href="/" className='text-danger'>Logout</a></li>
                    </ul>
                </div>
                <div className="col">
                    <div className="container-fluid mt-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;
