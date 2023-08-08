import express      from "express";
import authRoutes   from "./routes/auth.js";
import userRoutes   from "./routes/users.js";
import postRoutes   from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer       from "multer";


const app = express();


///
/// Allow the xdomain requests from client domain
///
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",      "http://localhost:5173"); 
  res.header("Access-Control-Allow-Headers",     "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",     "GET, POST, DELETE, PUT");
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use(cookieParser());



///
/// Define multer storage handler to handle the uploaded files
///
/// dest:     return the callback that give the needed part of URL
/// filename: define how will be created name of uploaded files
///
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
})
.catch;

///
/// Instance of multer storage handler that use defined on the top of this storage
///   and define the filtering of files for this by extensions of itselves
///
const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, callback) {
    let ext = path.extname(file.originalname);

    if (ext != '.png' || ext != '.jpg' || ext != '.jpeg' || ext != '.webp') {
      return callback(new Error('Можно загружать только изображения!'));
    }
    callback(null, true);
  }
});



///
/// Define the routes and methods that save and return files by the requests
///
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file ? req.file : "";

  res.status(200).json(file.filename);
});

app.get("/api/upload/:filename", (req, res) => {
  const file = './upload/' + req.params.filename;

  res.status(200).download(file);
});



///
/// Defining of the routes for controllers for requests
///
app.use("/api/auth",  authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



app.listen(8800, () => {
  console.log("Connected!");
});