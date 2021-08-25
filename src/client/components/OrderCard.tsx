import React from 'react'
import { newOrder } from '../../types';
import ReviewOrder from '../views/ReviewOrder';

const OrderCard = (props: newOrder) => {

    return (
        <div className="card col-md-6 mt-2">
            <div className="card-header display-4 text-primary">{props.first_name}</div>
            <div className="card-body">
                <h2 className="card-title">{props.drink_type}</h2>
                <p className="card-text">{props.food_type}</p>
                <p className="card-text text-light text-center border rounded col-md-2 bg-dark">${props.price}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-outline-primary">Review Order</button>
                    <button className="btn btn-sm btn-outline-danger">Delete Order</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;
