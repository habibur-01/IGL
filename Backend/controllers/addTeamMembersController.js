const teamMembers = require("../models/addteammembers");

exports.addTeamMember = async (req, res) => {
  try {
    const {
      category,
      employeeName,
      employeeId,
      designition,
      department,
      email,
      facebook_link,
      linkedin_link,
      instagram_link,
    } = req.body;
    const photo = req?.file.path;
    const result = await teamMembers.create({
      category,
      employeeName,
      employeeId,
      designition,
      department,
      photo,
      email,
      facebook_link,
      linkedin_link,
      instagram_link,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating photo entry" });
  }
};


exports.getTeammember = async (req, res) => {
  try {
    const {employeeId}  = req?.query;
    // const numericEmployeeId = parseInt(id, 10); 
    console.log(employeeId)

    let result;

    if (employeeId) {
      result = await teamMembers.findOne({ where: { employeeId: employeeId } });

      if (!result) {
        return res.status(404).json({ message: "Team member not found" });
      }
    } else {
      result = await teamMembers.findAll();
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching team member(s)" });
  }
};

