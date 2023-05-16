import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />

            <div class="card-body d-flex justify-content-between align-items-center">
                <div className=''>
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>
                </div>
                <div className=''>
                    <a href="#" className="btn btn-primary btn-sm">Buy</a>
                </div>
            </div>

        </div>
    );
}

export default Card;
