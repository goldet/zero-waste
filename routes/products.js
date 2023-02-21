var express = require("express");
var router = express.Router();
const db = require("../model/helper");

//function to return all todo items
const getProducts = async () => {
  const results = await db("SELECT * FROM products ORDER BY id ASC;");
  return results.data;
};

//get list of products
router.get("/", async (req, res) => {
  const name = req.query.name;
  const zipCode = req.query.zip_code;
  const needed = req.query.needed;

  //get product by name
  if (name && needed === "false") {
    try {
      const response = await db(
        `SELECT * FROM products WHERE needed = false AND name LIKE '%${name}%';`
      );
      const product = response.data;

      if (!product) {
        res.status(404).send();
        return;
      }
      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //get product by zip code
  else if (zipCode) {
    try {
      const response = await db(
        `SELECT * FROM products WHERE zip_code = ${zipCode};`
      );
      const product = response.data;

      if (!product) {
        res.status(404).send();
        return;
      }
      res.status(200).send({ product });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //get products when product is needed
  else if (req.query.needed === "true") {
    try {
      const products = await db(`SELECT * FROM products WHERE needed = true;`);

      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
    //get products when product is to be shared
  } else if (req.query.needed === "false") {
    try {
      const products = await db("SELECT * FROM products WHERE needed = false;");
      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    //check if needed is undefined, get all products
    try {
      const products = await getProducts();
      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

//Get a product by ID
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await db(`SELECT * FROM products WHERE id = ${id};`);
    const product = response.data[0];

    if (!product) {
      res.status(404).send("Not found");
      return;
    }
    res.status(200).send(response.data); /* {product} */
  } catch (error) {
    res.status(500).send(error);
  }
});

//post a new product and return it with id
router.post("/", async (req, res) => {
  const firstname = req.body.firstname;
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const amount = req.body.amount;
  const phone_number = req.body.phone_number;
  const zip_code = req.body.zip_code;
  const needed = req.body.needed;

  try {
    const response = await db(
      `INSERT INTO products (firstname, name, type, description, amount, phone_number, zip_code, needed) values ('${firstname}', '${name}', '${type}', '${description}', ${amount}, '${phone_number}', '${zip_code}', ${needed}); SELECT LAST_INSERT_ID()`
    );

    const products = await getProducts();

    const insertId = response.data[0].insertId;

    res.status(201).send({ products, insertId });
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete product by id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await db(`SELECT * FROM products WHERE id = ${id}`);
    const product = response.data[0];

    if (!product) {
      res.status(404).send();
      return;
    }

    await db(`DELETE FROM products WHERE id = ${id}`);

    res.send(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

//patch request to edit product (not used yet)
router.patch("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const firstname = req.body.firstname;
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const amount = req.body.amount;
  const phone_number = req.body.phone_number;
  const zip_code = req.body.zip_code;
  const needed = req.body.needed;

  try {
    const response = await db(`SELECT * FROM products WHERE id = ${id}`);
    const product = response.data[0];

    if (!product) {
      res.status(404).send();
      return;
    }
    const newProduct = { ...product, ...req.body };

    await db(
      `UPDATE products SET firstname = '${newProduct.firstname}', name = '${newProduct.name}', type = '${newProduct.type}', 
      description = '${newProduct.description}', amount = ${newProduct.amount}, phone_number = '${newProduct.phone_number}',
       zip_code = '${newProduct.zip_code}', needed = ${newProduct.needed} WHERE id = ${newProduct.id}` /*    phone_number = '${phone_number}' zip_code = '${zip_code}', needed = ${needed} */
    );

    res.send(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
