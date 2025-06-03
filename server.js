import express from 'express';
import router from "./src/routes/router.js"
import connectDB from './src/config/configDB.js';
import dotenv from 'dotenv';


dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use('/', router)

export default app
