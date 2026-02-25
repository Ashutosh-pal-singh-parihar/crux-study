import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true 
    },
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject",
        required : true
    },
    faculty : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FacultyDetails",
        required : true
    },
    queFile : {
        type : String,
        required : true
    },
    ansFile : {
        type : String,
        required : true
    },
    semester : {
        type : String,
        required : true
    },
    branch : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch"
    }
},{timestamps : true})

export default Assignment = mongoose.model("Assignment",assignmentSchema)