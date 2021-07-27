export interface newOrder {
    id: string,
    first_name: string,
    drink_type: string,
    food_type: string,
    price: Number
};

export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
};