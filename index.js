const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb+srv://kumaraman187187:7acTTwJhEdh5RNr8@cluster0.w2wtx9p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const port = 3000;
const app = express();
const routerr = express.Router();
const dataa = require('./model.js');

app.use(express.json());



app.get('/',(req,res) => {
     res.send("hello World!");
})
// post api 
app.post('/api/post' ,async (req,res)  =>{
    try{
      const {name,pass,epass,fname,floc,fsize,ftype} = req.body;
      console.log(name);
      let u = new  dataa({
        name : name,
        pass : pass,
        epass : epass,
        fname : fname,
        floc : floc,
        fsize : fsize,
        ftype : ftype
      });
      u = await u.save();
      res.json(u);
    }
    catch(err){
        return res.status(500).send({error : err.message});
    }
}) 

// get api

app.get('/api/get' ,async(req,res) => {
    const u  = await dataa.find({});
    res.json({u});
})



mongoose.connect(db).then(
    console.log('database connected'),
).catch((err) => {
    console.log(err);
})

app.listen(port,"0.0.0.0",()=>{
    console.log("server started `http://localhost:3000`");
});