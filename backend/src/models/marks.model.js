import mongoose from "mongoose"

const marksSchema = new mongoose.Schema({
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "StudentDetails",
        required : true
    },
    subjectId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject",
        required : true
    },
    marksObtained : {
        type : String,
        required : true
    },
    semester : {
        type : String,
        required : true 
    },
    examId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Exam",
        required : true
    }
},{timestamps : true })

export default Marks = mongoose.model("Marks",marksSchema)