

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    description VARCHAR (1000), 
    amount FLOAT(3, 0) NOT NULL, 
    phone_number VARCHAR(10) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    needed TINYINT NOT NULL
);

INSERT INTO products (firstname, name, type, description, amount, phone_number, zip_code, needed)
VALUES ('Golde', 'tomatoes', 'fruits', 'a few days old, some are very soft', 5, '697831082', '28005', false);

