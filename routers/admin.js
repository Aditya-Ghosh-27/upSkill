const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const router = Router();

// Admin routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created succesfully"
    })
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