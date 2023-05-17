import React from 'react';
import { CurrencyFormat } from '../currencyFormat';
import noImage from '../../assets/images/no-image.png';

const Card = (props) => {
    return (
        <div className="card mb-3" style={{ width: "18rem", maxHeight: "25rem" }}>
            <img src={props.image || noImage} className="card-img-top" style={{ height: "20rem" }} alt="..." />
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className=''>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Rp{CurrencyFormat(props.price)}</p>
                </div>
                <div className=''>
                    <a href="#" className="btn btn-primary btn-sm">Buy</a>
                </div>
            </div>

        </div>
    );
}

export default Card;
