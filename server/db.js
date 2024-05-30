const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGODB_URI)
		.then((result) => console.log("Connectado a la base de datos de MongoDB"))
		.catch((err) => console.log("No se puede conectar al a base de datos"));
};
