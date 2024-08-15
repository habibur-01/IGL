const express = require("express")
const multer = require('multer');
const router = express.Router();
const addPhotoController = require("../controllers/addPhotoController")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./public/images")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage });

router.post('/addphoto', upload.single('file'), addPhotoController.addPhoto);
router.get('/addphoto', addPhotoController.getPhoto);
router.get("/year", addPhotoController.getYear)

module.exports = router;