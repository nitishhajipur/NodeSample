const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message",(req,res)=>{
res.json({message:"Hello from server!"})
})

app.listen(8000,()=>{
    console.log(`server is running at port 8000.`)
})

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascript@123@cluster0.kdbqqzn.mongodb.net/?retryWrites=true&w=majority'