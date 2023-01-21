

DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    amount FLOAT(3, 0) NOT NULL,
    phone_number VARCHAR(10) NOTNULL
)

INSERT INTO products (name, type, amount, phone_number)
VALUES ('tomatoes', 'vegetable', 5, '697831082')

/* purpose
VARCHAR(100) NOT NULL
);

INSERT INTO notes (docname,
purpose)
VALUES ("helper.js", "connect server to db with credentials"); */

/* Do I need to put the original DROP and CREATE methods here? or no because I already did it in the terminal? */