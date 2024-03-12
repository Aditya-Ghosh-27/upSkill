const jwt = require("jsonwebtoken");
const  JWT_SECRET  = process.env.JWT_SECRET;

// Middleware for handling auth
function userMiddleware(req, res){
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(token, JWT_SECRET);

    if(decodedValue.username){
        req.username = decodedValue.username;
        req.randomData = "Asdasdasdasd";
        next();
    } else{
        res.sendStatus(403).json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;