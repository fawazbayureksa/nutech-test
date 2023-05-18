import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        const item = localStorage.getItem('user');
        setUser(item);
    }, [])

    const handleLogin = () => {
        if (!user) {
            history.push('/login')
        } else {
            history.push('/dashboard')
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
            <div className="container">
                <a className="navbar-brand" href="#" style={{ fontFamily: "bold", fontSize: "24px" }}>Shopi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                    </ul>
                </div>
                <span className="navbar-text">
                    <button onClick={handleLogin} className="btn btn-outline-success me-2">Login</button>
                </span>
            </div>
        </nav >

    );
}

export default Navbar;
