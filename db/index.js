const mongoose = require("mongoose");

mongoose.connect('');

// Schema definition here
const AdminSchema = new mongoose.Schema({
    // Admin Schema here
})

const UserSchema = new mongoose.Schema({
    // User Schem here
})

const CourseSchema = new mongoose.Schema({
    // Course Schema here
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}