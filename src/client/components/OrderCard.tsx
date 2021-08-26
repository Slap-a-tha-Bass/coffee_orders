import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { newOrder, OrderCardProps } from '../../types';
import EditOrder from '../views/EditOrder';
import ReviewOrder from '../views/ReviewOrder';


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
    const [order, editOrder] = useState<newOrder>(null);
    const [first_name, set_first_name] = useState<newOrder['first_name']>(null);
    const [drink_type, set_drink_type] = useState<newOrder['drink_type']>(null);
    const [food_type, set_food_type] = useState<newOrder['food_type']>(null);
    const [price, set_price] = useState<newOrder['price']>(null);

    useEffect(() => {
        fetch(`/api/orders/${props.id}`)
            .then(res => res.json())
            .then(data => {
                editOrder(data);
                set_first_name(data.first_name);
                set_drink_type(data.drink_type);
                set_food_type(data.food_type);
                set_price(data.price);
            })
    }, [props.id]);

    return (
        <div className="card col-md-6 mt-2">
            <div className="card-header display-4 text-primary">{props.first_name}</div>
            <div className="card-body">
                <h2 className="card-title">{props.drink_type}</h2>
                <p className="card-text">{props.food_type}</p>
                <p className="card-text text-light text-center border rounded col-md-2 bg-dark">${props.price}</p>
                <div className="d-flex justify-content-between">
                    {props.isPreview && <Link to={`/orders/${props.id}`} className="btn btn-sm btn-outline-primary">Review Order</Link>}
                    {props.isPreview || <Link to={`/orders/${props.id}/edit`} className="btn btn-sm btn-outline-warning" >Edit Order</Link>}
                    {props.isPreview || <button className="btn btn-sm btn-outline-danger" onClick={handleDeleteClick}>Delete Order</button>}
                </div>
            </div>
        </div>
    )
}

export default OrderCard;
