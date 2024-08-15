const addPhoto = require("../models/addPhoto");
const path = require("path");

exports.addPhoto = async (req, res) => {
  try {
    // console.log(req.body);
    const { category, year, caption } = req.body;
    const photo = req.file && req.file.path;
    console.log(photo);
    const newPhoto = await addPhoto.create({ category, year, caption, photo });
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating photo entry" });
  }
};
exports.getPhoto = async (req, res) => {
  try {
    const allPhoto = await addPhoto.findAll();
    res.status(201).json(allPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating get photo " });
  }
};

exports.getYear = async (req, res) => {
  try {
    // Retrieve all unique years from the addPhoto model
    const uniqueYears = await addPhoto.findAll({
      attributes: ['year']
    });

    // Map through the results to get an array of years
    const years = uniqueYears.map((record) => record.year);

    res.status(200).json(years);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving years" });
  }
};
