const jwt = require("jsonwebtoken");
const  JWT_SECRET  = process.env.JWT_SECRET;

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1];
    try{
        const decodedValue = jwt.verify(token, JWT_SECRET);
        if(decodedValue.username){
            next();
        } else{
            res.sendStatus(403).json({
                msg : "You are not authenticated"
            })
        }
    } catch(e){
        res.json({
            msg: "Incorrect Inputs"
        })
    }
}

module.exports = adminMiddleware;