const { Router } = require("express");
const router = Router();
const { User, Course} = require("../db/index");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        message: "User created succesfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.json({
        course: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;

    User.updateOne({
        username: username
    }, {
        "$push":{
            purchasedCourses: courseId
        }
    }).catch(function(e){
        console.log(e);
    });

    res.json({
        message: "Purchase Complete!"
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user =  await User.findOne({
        username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: _id
    })
});

module.exports = router