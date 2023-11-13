const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const empresaRoutes = require("./routes/empresa");
const nivelRoutes = require("./routes/nivel");
const parkingRoutes = require("./routes/parking")
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api',empresaRoutes);
app.use('/api',nivelRoutes);
app.use('/api',parkingRoutes)

app.get('/', (req,res) =>{
    res.send('Hola mundo Api')
});

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a la base de datos'))
.catch((error) => console.log(error))


app.listen(port, () => console.log('Servidor escuchando en ',port))