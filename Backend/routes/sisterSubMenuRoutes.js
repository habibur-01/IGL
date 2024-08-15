const express = require('express');
const multer = require('multer');
const router = express.Router();
const subMenuController = require("../controllers/sisterSubMenuControllers")

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route to create a new sub-menu entry
router.post('/sistersubmenusdata', upload.single('image'), subMenuController.addSiterSubMenuData);
router.get('/sistersubmenusdata', subMenuController.SiterSubMenuData);

module.exports = router;
