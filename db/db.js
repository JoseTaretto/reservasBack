const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = process.env.MONGODB_URI || `mongodb://localhost:27017/Reservapp`;


const conectarDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Base de datos conectada.");
    } catch (error) {
        console.log( "error",error);
        process.exit(1);
    }
}

module.exports = conectarDB;