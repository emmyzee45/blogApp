var express = require("express");
var app = express();
const path   = require("path");
const dotenv = require("dotenv");
const multer = require("multer");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))

// process.env.MONGO_URL
mongoose.connect("mongodb://localhost/reactblog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("connected to Mongodb"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded...");
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen("5000", () => {
    console.log("Backend is running.");
  });