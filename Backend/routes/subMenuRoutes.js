const express = require("express")
const router = express.Router();
const subMenuController = require("../controllers/subMenuControllers")

router.post("/submenus", subMenuController.addSubMenu )

router.get("/submenus", subMenuController.getSubMenus);

module.exports = router;