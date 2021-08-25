import React, { useState }from 'react';
import { useHistory } from 'react-router-dom';
import { newOrder } from '../../types';
import ReviewOrder from './ReviewOrder';

const Home = () => {
    const history = useHistory();

    const [first_name, setName] = useState<newOrder['first_name']>(null);
    const [drink_type, setDrink] = useState<newOrder['drink_type']>(null);
    const [food_type, setFood] = useState<newOrder['food_type']>(null);
    const [price, setPrice] = useState<newOrder['price']>(null);

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleDrinkInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDrink(e.target.value);
    }
    const handleFoodInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFood(e.target.value);
    }
    const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(e.target.value));
    }
    const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`/api/orders`, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({ first_name, drink_type, food_type, price })
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/orders/${data.id}`)
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <form className="form-group bg-light col-md-6">
                <div>
                    <label>Name</label>
                    <input placeholder="First Name" type="text" className="form-control" onChange = {handleNameInput} />
                </div>
                <div>
                    <label>Drink Order</label>
                    <input placeholder="Drink Order" type="text" className="form-control" onChange = {handleDrinkInput} />
                </div>
                <div>
                    <label>Food Order</label>
                    <input placeholder="Food Order" type="text" className="form-control" onChange = {handleFoodInput} />
                </div>
                <div>
                    <label>Price</label>
                    <input placeholder="Price" type="number" className="form-control" onChange = {handlePriceInput} />
                </div>
                <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary mt-2" onClick={handleSubmitClick}>Submit Order</button>
                </div>
            </form>
        </>
    )
}

export default Home;
