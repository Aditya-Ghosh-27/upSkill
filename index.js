const express = require("express");
const app = express();
const adminRoter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is starting on port: ${PORT}`)
});