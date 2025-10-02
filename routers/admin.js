const { Router } = require("express");
const jwt = require("jsonwebtoken");
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
    
    // if the username already exists then send the below response
    if(await Admin.findOne({username})){
        return res.status(403).json({msg : "Username already exists"}); 
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
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const admin = await Admin.find({
        username,
        password
    });

    // Unique object id
    const objId = admin._id;

    if(admin){
        const token = jwt.sign({
            username,
            objId
        }, JWT_SECRET);

        res.json({
            token
        })
    } else{
        res.sendStatus(411).json({
            message: "Incorrect username and password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
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

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;
