import mongoose from "mongoose";

const adminDetailsSchema = new mongoose.Schema({
    employeeId : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phoneNo : {
        type : String,
        required : true
    },
    profile : {     // it stores the link for profile pic of the admin
        type : String,
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
    gender : {
        type : String,
        required : true,
        enum : ["male","female"]
    },
    dob : {
        type : Date,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    joiningDate : {
        type : String,
        required : true
    },
    salary: {
      type: Number,
      required: true,
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
    password: {
      type: String,
      required: true,
    },
},{timestamps : true})

export default AdminDetails = mongoose.model("AdminDetails",adminDetailsSchema)