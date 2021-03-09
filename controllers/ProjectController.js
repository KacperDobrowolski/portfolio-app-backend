const Project = require('../models/ProjectModel');

// Get all projects

exports.index = (req, res) => {
    Project.find({}, (err, data) => {
        if(err) {
            res.json({
                status: "Error",
                message: err
            })
        }
        res.json({
            status: "Success",
            data: data
        })
    })
}