const express = require("express");
const multer = require("multer");
var router = express.Router();

//Setting storage engine
const storageEngine = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

//initializing multer
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

const path = require("path");

const checkFileType = function (file, cb) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/; //check extension names

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

router.post("/:id/single", upload.single("image"), (req, res) => {     // /:id (add idea before single)
/*   const data = req.body;
  const imagePath = req.file.path;
  const id = Number(req.params.id); */
  //const id = Number(req.params.id);

  
  const id = req.body.id;
  const image = req.files.image;
  const imagePath = `/images/${id}.${image.mimetype.split('/')[1]}`;

// Store the data and imagePath in your database

//UPDATE with ID 
/*  `UPDATE products SET image_path = '${imagePath}' WHERE id = ${id};`
 */
fs.writeFile(`./public${imagePath}`, image.data, (error) => {
  if (error) throw error;
  connection.query(
    'UPDATE products SET image_path = ? WHERE id = ?',
    [imagePath, id],
    (error) => {
      if (error) throw error;
      res.json({ message: 'Image saved and path added to the database successfully' });
    }
  );
});



res.send({


  status: "success",
  message: "Image and data uploaded successfully",
  data: data,
  imagePath: imagePath
});

  if (req.file) {
    res.send("Single file uploaded successfully");
  } else {
    res.status(400).send("Please upload a valid image");
  }
});


module.exports = router;
//create product try to return product created in backend 
//upload image 
//when you do post request you need to provide id of products
//after uploading image with id you update the database with the url of the image with the server 