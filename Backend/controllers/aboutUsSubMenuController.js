const addAboutUsSub = require("../models/aboutUsSubMenuModel")

exports.addAboutUsSubMenu = async(req, res) => {
    try {
        const {name, designition, details, subMenu} =req.body;
        const image = req.file?.path
        const Aboutus = await addAboutUsSub.create({name, designition, details, image, subMenu})
        res.status(201).json(Aboutus)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating photo entry" });
        
    }
}

exports.getAboutusSub = async(req, res) => {
    try {
        const findAboutUs = await addAboutUsSub.findAll();
        res.status(201).json(findAboutUs)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating photo entry" });
    }
}