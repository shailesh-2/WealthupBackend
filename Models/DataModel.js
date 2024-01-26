const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    data: {type:String},
})

const DataModel=mongoose.model("data",DataSchema);

module.exports={
    DataModel
}