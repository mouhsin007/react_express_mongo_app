const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
var jsonParser = bodyParser.json()
app.use(bodyParser.urlencoded({ extended:true }));
app.use(jsonParser)
const cors=require("cors");

app.use(cors())
const  mongoose = require("mongoose");


//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://mouhcine:1311085459.raja@cluster0.h9oxcmn.mongodb.net/?retryWrites=true&w=majority"

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});













const testroute=require("./roots/root")
// let arr=[{id:1,name:"mouhcine"},{id:2,name:"mehdi"},{id:3,name:"hamza"}]
app.use("/",testroute)
// app.get('/', (req, res) => {
//     var obj=arr.find(e=>e.id==req.query.id)
//   res.send(obj)
// })
// app.post('/pst',jsonParser,(req,res)=>{
//     arr.push(req.body)
//     res.send(arr)
// })
// app.put('/pt',jsonParser,(req,res)=>{
//     arr.forEach(e=>{
//         if(e.id==req.body.id){
//             e.name=req.body.name
//         }
//     })
//     res.send(arr)
// })
// app.delete('/dl',jsonParser,(req,res)=>{
//     arr=arr.filter(e=>e.id !=req.query.id)
//     res.send(arr)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})