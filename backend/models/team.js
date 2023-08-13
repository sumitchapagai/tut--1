const mongoose= require("mongoose");
const teamSchema=mongoose.Schema({
    name:String,
    foundation:Number,
    stadium:String,
    owner:String
});
const team=mongoose.model("Team",teamSchema);
module.exports=team;