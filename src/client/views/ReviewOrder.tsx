import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { newOrder } from '../../types';


const ReviewOrder = () => {
    const { id } = useParams<{ id: string }>();
    const [reviewOrder, setReviewOrder] = useState<newOrder>(null);
    useEffect(() => {
        fetch(`/api/orders/${id}`)
        .then(res => res.json())
        .then((data) => setReviewOrder(data));
    });

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default ReviewOrder;
