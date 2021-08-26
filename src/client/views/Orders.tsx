import React, { useState, useEffect } from 'react';
import { newOrder } from '../../types';
import OrderCard from '../components/OrderCard';

const Orders = () => {
    const [orders, setOrders] = useState<newOrder[]>([]);

    useEffect(() => {
        fetch("/api/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data))
    }, []);

    return (
        <div>
            {orders.map((order) => (
                <OrderCard key={`${order.id}`} {...order} isPreview />
            ))}
        </div>
    )
}

export default Orders;
