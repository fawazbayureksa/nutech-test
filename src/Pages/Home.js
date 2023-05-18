import React, { useEffect, useState } from 'react';
import Template from '../components/template/template';
import Card from '../components/helpers/Card';
import {
    collection,
    getDocs,
    getFirestore,
} from 'firebase/firestore';
import firebase from '../Firebase';
import HomeLogo from '../assets/images/home1.png';
const Home = () => {
    const db = getFirestore(firebase);

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const arr = [];
        const querySnapshot = await getDocs(collection(db, "product"));
        querySnapshot.forEach((doc) => {
            arr.push({ data: doc.data(), id: doc.id });
        });
        setData(arr)
    }


    return (
        <Template>
            <div className='row align-items-center' style={{ backgroundColor: "#E3D7FF", borderRadius: "10px" }}>
                <div className='col-md-6 col-sm-12 ml-5 p-3'>
                    <span className='style-text'>Life is easy with online shopping</span>
                    <br />
                    <button className="btn btn-outline-primary mt-3" type="button">Shop Now</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img
                        src={HomeLogo}
                        className="image-container "
                        alt="..."
                    />
                </div>
            </div>
            <div className='d-flex flex-row flex-wrap mt-3'>
                {data.length > 0 && data.map((item, index) => (
                    <div className='col-3' key={index}>
                        <Card
                            image={item.data.url}
                            price={item.data.selling_price}
                            title={item.data.product_name}
                        />
                    </div>
                ))}
            </div>
        </Template>
    );
}

export default Home;
