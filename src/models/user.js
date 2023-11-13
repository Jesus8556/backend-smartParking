const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre : String,
    edad: {type: Number, min:18, index:true},
    pais:String
})
usuarioSchema.statics.count = usuarioSchema.statics.countDocuments;

module.exports = mongoose.model('Usuario',usuarioSchema);
