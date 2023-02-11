const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const PORT = process.env.PORT || 5500;

const connectDB = require('./conexiondb')

const TodoItemRoute = require('./routes/todoItems')

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/',TodoItemRoute)

app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})