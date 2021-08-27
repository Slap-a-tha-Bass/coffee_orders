import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { newOrder } from '../../types';

const EditOrder = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    const [EditOrder, setEditOrder] = useState<newOrder>(null);
    const [first_name, setName] = useState<newOrder['first_name']>(null);
    const [drink_type, setDrink] = useState<newOrder['drink_type']>(null);
    const [food_type, setFood] = useState<newOrder['food_type']>(null);
    const [price, setPrice] = useState<newOrder['price']>(null);
    const [is_completed, set_is_completed] = useState<newOrder['is_completed']>(false);

    useEffect(() => {
        fetch(`/api/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                setEditOrder(data);
                setName(data.first_name);
                setDrink(data.drink_type);
                setFood(data.food_type);
                setPrice(data.price);
                set_is_completed(data.is_completed);
            });
    }, [id]);


    const editNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const editDrinkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDrink(e.target.value);
    }
    const editFoodInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFood(e.target.value);
    }
    const editPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    };
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`/api/orders/${id}/edit`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ first_name, food_type, drink_type, price, is_completed })
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/orders/${id}`)
            })
            .catch(err => console.log(err))
    };
    const handleIsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        set_is_completed(true);
    }

    return (
        <>
            <form className="form-group bg-light col-md-6">
                <div>
                    <label>Name</label>
                    <input placeholder="First Name" type="text" className="form-control" value={first_name || ''} onChange={editNameInput} />
                </div>
                <div>
                    <label>Drink Order</label>
                    <input placeholder="Drink Order" type="text" className="form-control" value={drink_type || ''} onChange={editDrinkInput} />
                </div>
                <div>
                    <label>Food Order</label>
                    <input placeholder="Food Order" type="text" className="form-control" value={food_type || ''} onChange={editFoodInput} />
                </div>
                <div>
                    <label>Price</label>
                    <input placeholder="Price" type="number" className="form-control" value={Number(price) || 0} onChange={editPriceInput} />
                </div>
                <div className="form-check form-switch mt-3">
                    <input className="form-check-input" type="checkbox" checked={is_completed} onChange={handleIsCompleted} />
                    <label className="form-check-label">Completed</label>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-primary mb-3" onClick={handleSaveClick}>Save</button>
                </div>
            </form>
        </>
    )
}

export default EditOrder;