const mongoose = require("mongoose");

const CONFIG = require("./config");

mongoose
	.connect(`mongodb://${CONFIG.DB.HOST}:${CONFIG.DB.PORT}/${CONFIG.DB.NAME}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.then(() => {
		console.log("Database Ready for use!");
	})
	.catch(err => {
		console.log(`Error starting Database: ${err}`);
    });

module.exports = mongoose;