//Require
const express = require('express');
const mongoose = require('mongoose');

//Variables
var app = express();


app.get('/', (req,res,next)=>{
		res.status(200).json({
			ok: true,
			mensaje: 'Petición realizada correctamente'
		});
});
mongoose.connection.openUri('mongodb://localhost:27017/icaroDB',(err,res)=>{
  if(err) throw err;
  console.log('Mongo database puerto 27017: \x1b[35m%s\x1b[0m','online');
});

//Escuchar peticiones
app.listen(3000, () =>{
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m','online');;
});
