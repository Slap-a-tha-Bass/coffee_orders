USE coffee_orders;

DROP TABLE Orders;
CREATE TABLE Orders (
	id CHAR(36) PRIMARY KEY,
    first_name VARCHAR(16) NOT NULL,
    drink_type VARCHAR(32),
    food_type VARCHAR(32),
    price VARCHAR(6) NOT NULL, 
    created_at DATETIME DEFAULT NOW(),
    updated_at DATETIME ON UPDATE NOW(),
    is_completed TINYINT DEFAULT 0
);
SELECT * FROM Orders;
INSERT INTO Orders (id, first_name, drink_type, food_type, price) VALUES ('15217272-ebef-498e-9d2d-e56de26fd001', 'Corey', 'Oat milk latte', '','6'); 
CREATE user 'coffee_orders_admin'@'localhost' IDENTIFIED WITH mysql_native_password BY 'drinkcoffee';
GRANT ALL PRIVILEGES ON coffee_orders.* TO 'coffee_orders_admin'@'localhost';