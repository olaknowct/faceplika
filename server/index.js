import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import { register } from './controllers/auth.js';

// use express framewrok
const app = express();

// Configuration
dotenv.config();
app.use(express.json());

// Mongoose Setup
const PORT = process.env.PORT || 6001;
// Replacing password
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// File Storage
const storage = multer.diskStorage({
  destination: function (erq, file, cb) {
    cb(null, 'public/assets');
  },

  filename: function (erq, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/auth/register', upload.single('picture'), register);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Application running on port : ${PORT}`));
  })
  .catch((error) => console.log(`DB connection error: ${error}`));
