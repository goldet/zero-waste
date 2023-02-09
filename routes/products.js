var express = require("express");
var router = express.Router();
const db = require("../model/helper");


//function to return all todo items
const getProducts = async () => {
  const results = await db("SELECT * FROM products ORDER BY id ASC;");
  return results.data;
};


//send bakc full list of items
router.get("/", async (req, res) => {
  const name = req.query.name;
  const zipCode = req.query.zip_code;
  const needed = req.query.needed;

  console.log(name);

  //products is like %product info%
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

  //zip code === zip code
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

  //return needed === true
  else if (req.query.needed === "true") {
    try {
      const products = await db(`SELECT * FROM products WHERE needed = true;`);

      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
    //return needed === false return gving away items
  } else if (req.query.needed === "false") {
    try {
      const products = await db("SELECT * FROM products WHERE needed = false;");
      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    //check if console.log(req.query.needed) is undefined, you need to get all products
    try {
      const products = await getProducts();
      res.status(200).send({ products });
    } catch (error) {
      res.status(500).send(error);
    }
  }
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await db(`SELECT * FROM products WHERE id = ${id}`);
    const product = response.data[0];

    if (!product) {
      res.status(404).send();
      return;
    }
    res.status(200).send({ product });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const firstname = req.body.firstname;
  const name = req.body.name;
  const type = req.body.type;
  const description = req.body.description;
  const amount = req.body.amount;
  const phone_number = req.body.phone_number;
  const zip_code = req.body.zip_code;
  const needed = req.body.needed;
  console.log(req.body);

  try {
    await db(
      `INSERT INTO products (firstname, name, type, description, amount, phone_number, zip_code, needed) values ('${firstname}', '${name}', '${type}', '${description}', ${amount}, '${phone_number}', '${zip_code}', ${needed})`
    );

    //const results = await db("SELECT * FROM items ORDER BY id ASC;")
    const products = await getProducts();

    res.status(201).send({ products });
  } catch (error) {
    res.status(500).send(error);
  }
});

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

//patch request
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
