import mongoose from "mongoose"

const timetableSchema = new mongoose.Schema({
    link : {
        type : String,
        required : true
    },
    branch : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        required : true 
    },
    semester : {
        type : String,
        required : true
    }
},{timestamps : true })

export default Timetable = mongoose.model("Timetable",timetableSchema)