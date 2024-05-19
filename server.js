import 'dotenv/config';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import './app/models/brand.js';
import './app/models/user.js';
import { routes } from './app/routes/index.js';

const app = express();
app.use(bodyParser.json());
routes(app);

mongoose.connect(process.env.DB_URI)
    .then(() => app.listen(process.env.PORT, () => console.log('App is running...')))
    .catch(err => console.error(err));