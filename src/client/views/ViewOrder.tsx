import React, { useState } from 'react';
import { newOrder } from '../../types';
import { useHistory, useParams } from 'react-router';



const ViewOrder = (props: newOrder) => {
    // let button_display = 'View Order';
    // const { id } = useParams<{ id: string }>();
    // const history = useHistory();

    // const [first_name, set_first_name] = useState<newOrder['first_name']>(null);
    // const [drink_type, set_drink_type] = useState<newOrder['drink_type']>(null);
    // const [food_type, set_food_type] = useState<newOrder['food_type']>(null);
    // const [price, set_price] = useState<newOrder['price']>(null);
    
    // const handleViewOrderClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     fetch(`api/orders/${id}`)
    //     .then(res => res.json())
        
    // }
    // const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     fetch(`api/orders/${id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         confirm("Delete Order?")
    //         history.push('/orders')
    //     })
    //     .catch(err => console.log(err))
        
    // }
    return (
        <div>

        </div>
    )
}

export default ViewOrder;
