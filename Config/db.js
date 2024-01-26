const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://shailesh:shailesh@cluster0.rors66x.mongodb.net/wealthup?retryWrites=true&w=majority"); 

module.exports={
    connection
}