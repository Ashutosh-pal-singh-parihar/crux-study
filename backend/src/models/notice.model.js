import mongoose from "mongoose"

const noticeSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true,
        enum : ["student","faculty","other"]
    },
    link : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
},{timestamps : true })

export default Notice = mongoose.model("Notice",noticeSchema)