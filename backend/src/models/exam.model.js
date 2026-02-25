import mongoose from "mongoose"

const examSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true 
    },
    semester : {
        type : Number,
        required : true
    },
    examType : {
        type : String,
        required : true
    },
    timetableLink : {
        type : String,
        required : true
    },
    totalMarks : {
        type : String,
        required : true
    }
},{timestamps : true })

export default Exam = mongoose.model("Exam",examSchema)