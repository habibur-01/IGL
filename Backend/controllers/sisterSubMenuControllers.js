const SisterConcernSubMenu = require("../models/sisterConcernsSubMenu");


// Create a new sub-menu entry
exports.addSiterSubMenuData = async (req, res) => {
  try {
    const { subCategory, details, website_URL } = req.body;
    const image = req.file ? req.file.buffer : null; // Handle image upload

    if (!subCategory || !image || !details || !website_URL) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newSubMenu = await SisterConcernSubMenu.create({
      subCategory,
      image,
      details,
      website_URL,
    });

    res.status(201).json(newSubMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating sub-menu entry' });
  }
};

exports.SiterSubMenuData = async (req, res) => {
  try {
    const subMenus = await SisterConcernSubMenu.findAll(); // Fetch all records
    res.status(200).json(subMenus); // Send the records back to the client as a JSON response
  } catch (error) {
    console.error(error); // Log any errors that occur
    res.status(500).json({ error: 'Failed to retrieve items' }); // Send a 500 status with an error message if something goes wrong
  }
};

