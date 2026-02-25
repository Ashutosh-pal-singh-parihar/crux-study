import mongoose from "mongoose";

const studentDetailsSchema =new mongoose.Schema({
    enrollmentNo : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNo : {
        type : Number,
        required : true,
    },
    semester : {
        type : String,
        required : true
    },
    branchId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Branch",
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male","female"]
    },
    dob : {
        type : Date,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    profile: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    emergencyContact : {
        name : {
            type : Number,
            required : true
        },
        relationship : {
            type : String,
            required : true
        },
        phoneNo : {
            type : String,
            required : true
        },
    },
    password : {
        type : String,
        required : true
    },
    admissionDate : {
        type : Date,
        required : true
    }
},{timestamps : true })


export default StudentDetails = mongoose.model("StudentDetails",studentDetailsSchema)