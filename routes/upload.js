const express = require("express");
const multer = require("multer");
var router = express.Router();
const db = require("../model/helper");

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

router.post("/:id/single", upload.single("image"), async (req, res) => {
  const data = req.body;
  const imagePath = req.file ? req.file.filename : null; // check if req.file exists

  if (imagePath) { // only update if imagePath exists
    const id = Number(req.params.id);
    await db(`UPDATE products SET image_path = '${imagePath}' WHERE id = ${id};`);
  }

  // Store the data and imagePath in your database
  res.send({
    status: "success",
    message: "Image and data uploaded successfully",
    data: data,
    imagePath: imagePath,
  });

});

module.exports = router;
