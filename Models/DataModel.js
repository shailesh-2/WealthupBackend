const mongoose=require("mongoose");

const DataSchema=new mongoose.Schema({
    data: String,
})

const DataModel=mongoose.model("data",DataSchema);

module.exports={
    DataModel
}