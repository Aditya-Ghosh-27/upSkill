const { Router } = require("express");
const router = Router();
const { User, Course} = require("../db/index");
const userMiddleware = require("../middleware/user");
const zod = require("zod");
const passwordSchema = zod.string().min(6);

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const result = passwordSchema.safeParse(password);

    // Input validation
    if(!result.success){
        return res.json({
            message: "Password must be atleast 6 characters"
        })
    }

    await User.create({
        username,
        password
    })
    res.json({
        message: "User created succesfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })

    // Uniq
    const objId = user._id;

    if(user){
        const token = jwt.sign({
            username,
            objId
        }, JWT_SECRET);

        res.json({
            token
        })
    } else{
        res.sendStatus(411).json({
            message: "Incorrect email and password"
        })
    }
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

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
      username: req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
      _id: {
        "$in" : user.purchasedCourses
      }
    });
    res.json({
      courses: _id
    })
  });


module.exports = router