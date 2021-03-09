const mongoose = require('mongoose');
const { Schema } = mongoose;

// Project Schema

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

// Create Project Model

const ProjectModel = mongoose.model("Project", ProjectSchema);

module.exports = ProjectModel;