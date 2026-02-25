import mongoose from "mongoose"

const materialSchema = new mongoose.Schema({
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
    file : {
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
    },
    type : {
        type : String,
        enum : ["notes","syllabus","other"],
        required : true
    }
},{timestamps : true })

export default Material = mongoose.model("Material",materialSchema)