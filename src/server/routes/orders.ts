import * as express from 'express';
import db_orders from '../db/queries/orders';
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
    const id = uuid_v4();
    const { first_name, drink_type, food_type, price } = req.body;
    try {
        // const new_order = await db_orders.create_order(newOrder);
    } catch (err) {
        res.status(500).json({ message: "Error! Not Found!", err });
    }
});


export default router;