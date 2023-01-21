

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    amount FLOAT(3, 0) NOT NULL,
    phone_number VARCHAR(10) NOT NULL
);

INSERT INTO products (name, type, amount, phone_number)
VALUES ('tomatoes', 'fruits', 5, '697831082');

