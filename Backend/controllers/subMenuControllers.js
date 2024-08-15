const SubMenu = require("../models/subMenu");


exports.addSubMenu = async (req, res) => {
    try {
      const { category, subCategory, path } = req.body;
      const newItem = await SubMenu.create({ category, subCategory, path });
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item' });
    }
  };

  exports.getSubMenus = async (req, res) => {
    try {
        const subMenus = await SubMenu.findAll();
        res.status(200).json(subMenus);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};