import * as express from 'express';
import db_orders from '../db/queries/orders';
import { useHistory } from 'react-router';
import { v4 as uuid_v4 } from 'uuid';
import { newOrder } from '../../types';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const orders = await db_orders.get_orders();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err })
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [order] = await db_orders.get_one_order(id);
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err })
    }
});
router.post('/', async (req, res) => {
    const { first_name, drink_type, food_type, price } = req.body;
    
    if (!first_name || !drink_type || !food_type || !price) {
        return res.status(400).json({ message: "Error! Fill out all fields"});
    }
    const id = uuid_v4();
    
    const whole_order: newOrder = { id, first_name, drink_type, food_type, price } 

    try {
        const new_order = await db_orders.create_order(whole_order);
        res.status(201).json({ message: "Order created!", id });
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err });
    }
});
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { is_completed } = req.body;
    try {
        const update_order = await db_orders.update_order(id, is_completed);
        res.status(201).json(update_order);
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err });
    }
});
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    const history = useHistory();
    try {
        const delete_order = await db_orders.delete_order(id);
        res.json({ message: "Order deleted!", id });
        history.push('/api/orders');
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err });
    }
})


export default router;