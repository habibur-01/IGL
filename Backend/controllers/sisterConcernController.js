const sisterConcern = require("../models/sisterConcernData");

exports.AddSisterConcernData = async (req, res) => {
  try {
    const { companyName, details, website_URL } = req.body;
    const logo = req.file.path;
    const result = await sisterConcern.create({
      companyName,
      details,
      website_URL,
      logo,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating photo entry" });
  }
};

exports.getsisterConcerData = async (req, res) => {
  try {
    const getData = await sisterConcern.findAll()
    res.status(201).json(getData)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating photo entry" });
  }
};
