   const mongoose = require('mongoose');

   const notescema  = mongoose.Schema({
      
   name : {
    type: String,
   }  , 
   pass : {
    type: String,
   },
   epass : {
    type: String,
   },
   fname : {
    type: String,
   },
   floc : {
    type: String,
   },
   ftype :{
    type :String,
   },
   fsize : {
    type: String,
   }
   
   
   })
   const notes = mongoose.model('notes',notescema);
   module.exports = notes;