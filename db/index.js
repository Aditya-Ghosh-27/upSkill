const mongoose = require("mongoose");

mongoose.connect('');

// Schema definition here
const AdminSchema = new mongoose.Schema({
    // Admin Schema here
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    // User Schem here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }]
})

const CourseSchema = new mongoose.Schema({
    // Course Schema here
   title: String,
   description: String,
   imageLink: String,
   price: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}