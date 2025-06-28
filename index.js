import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { db } from './db.js';
import userRoute from "./routes/user.route.js";


const port = 5000;
const app = express();

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || origin.endsWith('.vercel.app') || origin === 'http://localhost:5173') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user',userRoute);

db().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
});
