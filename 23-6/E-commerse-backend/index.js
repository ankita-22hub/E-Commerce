const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnect } = require('./config/dbConnect');
const authRouter = require('./routes/authRoutes');

const app = express();
app.use(cors({
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api/v2', authRouter);

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is active at : ${PORT}`);
})