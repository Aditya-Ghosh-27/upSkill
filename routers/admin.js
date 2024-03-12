const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const zod = require("zod");
const passwordSchema = zod.string().min(6);

// Admin routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const result = passwordSchema.safeParse(password);

    // Input validation
    if(!result.success){
        return res.json({
            message : "Password should atleast be of 6 characters"
        });
    }

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created succesfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signin logic
    

});

router.post('courses', async (req, res) => {
    // Implement courses ccreation logic
    const title = req.body.title;
    const descriptiom = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title,
        descriptiom,
        imageLink,
        price
    })

    res.json({
        message: "Course created succesfully",
        courseId: newCourse._id
    });
});

router.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;