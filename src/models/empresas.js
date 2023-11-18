const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefono: {
            type: Number,
            required: true
        },
        imagen: {
            type: String
        }
    }

);


const nivelSchema = mongoose.Schema(
    {
        nivel:{
            type: String,
            required:true
        },
        empresa:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Empresa'
        }

    }
);

const parkingSchema = mongoose.Schema(
    {
        lugar:{
            type:String,
        },
        nivel:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Nivel'
        },
        estado:{
            type:Boolean,
        }
    }
)


const Empresa = mongoose.model('Empresa',userSchema);
const Nivel = mongoose.model('Nivel',nivelSchema);
const Parking = mongoose.model('Parking', parkingSchema); 
module.exports = {Empresa,Nivel, Parking};
