//import modules
import express from "express";
import { config } from "dotenv";
import cors from "cors";

//import routers
import fileRouter from "./routes/file.router.js";
import userRouter from "./routes/user.router.js";
import adminRouter from "./routes/admin.router.js";
import contactRouter from "./routes/contact.router.js";
import healthRouter from "./routes/health.router.js";

//import db config
import { connectDB } from "./config/database.config.js";

//config env variables
config();

//app configuration
const app = express();
const port = process.env.PORT; //port info from env variables
const allowedCorsOriginMain = process.env.CORS_ORIGIN_ALLOW_MAIN; //cors origin from env variables
const allowedCorsOriginTest = process.env.CORS_ORIGIN_ALLOW_TEST; //cors origin from env variables

//cors
app.use(
    cors({
        origin: [allowedCorsOriginMain, allowedCorsOriginTest], //set cors origin restriction
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db
connectDB().then(() => {
    //listener
    app.listen(port, () => {
        console.log(`\nServer is ready to use!`);
    });
});

//routers
app.use("/api/file", fileRouter); //file router
app.use("/api/user", userRouter); //user router
app.use("/api/admin", adminRouter); //admin router
app.use("/api/contact", contactRouter); //admin router
app.use("/api/health", healthRouter); //health router
