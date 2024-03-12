const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);



app.listen(PORT, () => {
    console.log(`Server is starting on port: ${process.env.PORT}`)
});