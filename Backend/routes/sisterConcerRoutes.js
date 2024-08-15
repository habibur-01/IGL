const express = require("express");
const multer = require("multer");
const router = express.Router();
const sisterConcernData = require("../controllers/sisterConcernController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post("/partner", upload.single('logo'), sisterConcernData.AddSisterConcernData)
router.get("/partner", sisterConcernData.getsisterConcerData)
module.exports = router;