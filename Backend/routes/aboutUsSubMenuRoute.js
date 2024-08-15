const express = require("express")
const multer = require('multer');
const router = express.Router();
const addAboutusSubController = require("../controllers/aboutUsSubMenuController")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./public/images")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage });

router.post('/subaboutus', upload.single('image'), addAboutusSubController.addAboutUsSubMenu);
router.get('/subaboutus', addAboutusSubController.getAboutusSub);

module.exports = router;