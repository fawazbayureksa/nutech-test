import React from 'react';
import { useNavigate } from 'react-router-dom';

const Template = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate("/nutech-test/home");
    }

    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className="sidebar">
                    <h3 className='brand-dashbord'>Shopi</h3>
                    <ul>
                        <li><a href="/nutech-test/product">Product</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                        <li><a href="#">Menu 4</a></li>
                        <li><a href="#" onClick={handleLogout} className='text-danger'>Logout</a></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="container-fluid mt-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;
