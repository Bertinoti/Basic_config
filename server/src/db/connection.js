const mongoose = require("mongoose");
const CONFIG = require("../config/config");

async function connection() {
    try {
        await mongoose.connect(CONFIG.mongoDB.mongoDB_URL)
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connection