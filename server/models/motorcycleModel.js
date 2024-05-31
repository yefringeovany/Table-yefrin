const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	marca: {
        type: String,
       
    },
    modelo: {
        type: String,
    },
    año: {
        type: Number,
    },
    precio: {
        type: Number,
    },
    color: {
        type: String,
    },
    kilometraje: {
        type: Number,
    },
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
