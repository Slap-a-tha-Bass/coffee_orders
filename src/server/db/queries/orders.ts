import { Query } from '../index';
import { newOrder } from '../../../types';


const get_orders = () => Query<newOrder[]>('SELECT * FROM Orders ORDER BY created_at ASC');
const get_one_order = (id: string) => Query<newOrder[]>('SELECT * FROM Orders WHERE id=?', [id]);
const create_order = (wholeOrderObject: newOrder) => Query('INSERT INTO Orders SET ?', [wholeOrderObject]);
const update_order = (id: string, is_completed: Number) => Query('UPDATE Orders SET is_completed=? WHERE id=?', [is_completed, id]);
const delete_order = (id: string) => Query('DELETE FROM Orders WHERE id=?', [id]);

export default {
    get_orders,
    get_one_order,
    create_order,
    update_order,
    delete_order
}