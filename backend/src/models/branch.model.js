import mongoose from "mongoose"

const branchSchema = new mongoose.Schema({
    branchId : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    department : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Department",
        required : true
    }
},{timestamps : true })

export default Branch = mongoose.model("Branch",branchSchema)