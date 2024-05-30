const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
	marca: {
        type: String,
        required: [true, "La marca es obligatoria"],
    },
    modelo: {
        type: String,
        required: [true, "El modelo es obligatorio"],
    },
    año: {
        type: Number,
        required: [true, "El año es obligatorio"]
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"]
    },
    color: {
        type: String,
        required: [true, "El color es obligatorio"],
    },
    kilometraje: {
        type: Number,
        required: [true, "El kilometraje es obligatorio"]
    },
});

module.exports = mongoose.model("Crud", crudSchema, "Cruds");
