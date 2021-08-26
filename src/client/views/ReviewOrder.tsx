import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { newOrder } from '../../types';
import OrderCard from '../components/OrderCard';


const ReviewOrder = () => {
    const { id } = useParams<{ id: string }>();
    const [reviewOrder, setReviewOrder] = useState<newOrder>(null);
    useEffect(() => {
        fetch(`/api/orders/${id}`)
        .then(res => res.json())
        .then((data) => setReviewOrder(data))
        .catch(err => console.log(err));
    }, [id]);
    return (
        <div>
            <OrderCard {...reviewOrder} />
        </div>
    )
}

export default ReviewOrder;
