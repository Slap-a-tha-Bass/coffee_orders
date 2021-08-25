import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { newOrder, OrderCardProps } from '../../types';


const OrderCard = (props: OrderCardProps) => {
    const history = useHistory();
    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (confirm("Do you want to delete the order?")) {
        fetch(`/api/orders/${props.id}/delete`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                history.push('/orders')
            })
            .catch(err => console.log(err))
        }
    }
    return (
        <div className="card col-md-6 mt-2">
            <div className="card-header display-4 text-primary">{props.first_name}</div>
            <div className="card-body">
                <h2 className="card-title">{props.drink_type}</h2>
                <p className="card-text">{props.food_type}</p>
                <p className="card-text text-light text-center border rounded col-md-2 bg-dark">${props.price}</p>
                <div className="d-flex justify-content-between">
                    {props.isPreview && <Link to={`/orders/${props.id}`} className="btn btn-sm btn-outline-primary">Review Order</Link>}
                    {props.isPreview || <button className="btn btn-sm btn-outline-danger" onClick={handleDeleteClick}>Delete Order</button>}
                </div>
            </div>
        </div>
    )
}

export default OrderCard;
