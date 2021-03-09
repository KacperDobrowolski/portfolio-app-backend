const router = require('express').Router();

// Default path

router.get('/', (req, res) => {
    res.send("Api works");
})

// Import ProjectController

const ProjectController = require('../controllers/ProjectController');

// Projects routes

router.route('/projects')
    .get(ProjectController.index);

module.exports = router;