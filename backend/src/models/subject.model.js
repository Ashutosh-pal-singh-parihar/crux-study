import mongoose from "mongoose"

const subjectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    code : {
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
    },
    credits : {
        type : Number,
        required : true
    }
},{timestamps : true })

export default Subject = mongoose.model("Subject",subjectSchema)