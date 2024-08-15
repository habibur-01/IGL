const addAboutUs = require("../models/addAboutUsContent")

exports.addAboutUs = async(req, res) => {
    try {
        const {name, designition, details} =req.body;
        const image = req.file?.path
        const Aboutus = await addAboutUs.create({name, designition, details, image})
        res.status(201).json(Aboutus)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating photo entry" });
        
    }
}

exports.getAboutus = async(req, res) => {
    try {
        const findAboutUs = await addAboutUs.findAll();
        res.status(201).json(findAboutUs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating photo entry" });
    }
}