
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    birthdate: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 15,
        match: /^\+?[1-9]\d{1,14}$/
    },
 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {
    timestamps: true,
    versionKey: false
});
const User = mongoose.model('User', userSchema);
export default User;