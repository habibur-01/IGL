const express = require("express")
const multer = require('multer');
const router = express.Router();
const addAboutusController = require("../controllers/addAboutUsController")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./public/images")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage });

router.post('/aboutus', upload.single('image'), addAboutusController.addAboutUs);
router.get('/aboutus', addAboutusController.getAboutus);

module.exports = router;