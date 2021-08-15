import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card col-md-4 my-1 cart  "   >
            <div>

                <img src={props.image} alt={props.name} width='100%' height='300' />
            </div>

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.discription}</p>
                <h5 className="card-title">{`${props.price} $`}</h5>
                <h5 >{props.quantity}</h5>
                <h2>{props.total}</h2>
                <Link to={`/products/${props.id}`} className={`btn btn-lg btny ${props.btn}`}>
                    <button type="button" className={`btn ${props.btn}`} onClick={props.handelclick}>{props.add}</button>

                </Link>

            </div>
        </div>

    );
}

export default Card;