const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
    // Método de conexión para la base de datos
    mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
  
    // Las siguientes funciones permiten determinar el estado de la base de datos: conectada, desconectada o error en la conexión
    mongoose.connection.on("connected", () => {
      console.log("Base de datos conectada");
    });
  
    mongoose.connection.on("disconnected", () => {
      console.log("Base de datos desconectada");
    });
  
    mongoose.connection.on("error", () => {
      console.log("Error al conectar la base de datos", error.message);
    });
  };
  
  module.exports = connectDB;