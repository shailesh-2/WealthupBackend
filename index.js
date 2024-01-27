const express=require("express");
const {connection} =require("./config/db")
const {DataModel} =require("./Models/DataModel")
const cors=require("cors");

const app=express();
app.use(cors());

app.get("/api/codes",async(req,res)=>{
    try{
        let Alldata=await DataModel.find();

        // console.log(Alldata);
        res.send({Alldata});
    }
    catch(err){
        res.send("something went wrong !!");
    }
})
app.use(express.json());
app.post("/api/codes/use",async (req,res)=>{

    const {data} =req.body;
    // console.log(req.body);
    const result = await DataModel.findOne({ data });
    if (result){
        res.send({msg:"This code has already been used"});
    }
    else{
        const saveDataModel=new DataModel({data});
        saveDataModel.save();

        res.send({msg:"posted"});
    }
})




app.listen(8081, async()=>{
    try{
        await connection
        console.log("connected");
    }
    catch(err){
        console.log("connection error")
    }
})