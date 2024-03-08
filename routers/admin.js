const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signin logic
});

router.post('courses', (req, res) => {
    // Implement courses ccreation logic
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;