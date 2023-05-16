import React from 'react';
import Template from '../components/template/template';
import Card from '../components/helpers/Card';

const Home = () => {
    return (
        <Template>
            <div className='row align-items-center' style={{ backgroundColor: "#E3D7FF", borderRadius: "10px" }}>
                <div className='col-md-6 col-sm-12 ml-5'>
                    <span className='style-text'>Life is easy with online shopping</span>
                    <br />
                    <button class="btn btn-outline-primary mt-3" type="button">Shop Now</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img
                        src="/images/home1.png"
                        className="image-container"
                        alt="..." />
                </div>
            </div>
            <div className='d-flex flex-row my-3'>
                <div className='col-3'>
                    <Card
                        image={"/images/tshirt1.jpg"}
                        price={10000}
                        title={"Tshirt Polos"}
                    />
                </div>
                <div className='col-3'>
                    <Card
                        image={"/images/tshirt2.jpg"}
                        price={20000}
                        title={"Tshirt Polos"}
                    />
                </div>
            </div>
        </Template>
    );
}

export default Home;
