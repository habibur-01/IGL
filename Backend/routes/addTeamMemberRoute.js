const express = require("express")
const router = express.Router();
const multer = require('multer')
const teamMemberController = require('../controllers/addTeamMembersController')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, "./public/images")
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage });

router.post("/teammember", upload.single('image'), teamMemberController.addTeamMember)
router.get("/teammember" , teamMemberController.getTeammember)

module.exports = router;