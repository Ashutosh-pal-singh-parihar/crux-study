import mongoose from "mongoose"

const departmentSchema = new mongoose.Schema({
    departmentId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true,                           
    }
},{timestamps : true })

export default Department = mongoose.model("Department",departmentSchema)