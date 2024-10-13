import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    phoneNo : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["recruiter", "candidate"],
        required : true
    },
    profile : {
        bio: {
            type : String
        },
        skills : [{
            type : String
        }],
        resume : {
            type : String
        },
        resumeName : {
            type : String
        },
        company : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Company'
        },
        profilePhoto : {
            type : String,
            default : ""
        }
    }
}, {timestamps : true});

export const User = mongoose.model('User', userSchema);