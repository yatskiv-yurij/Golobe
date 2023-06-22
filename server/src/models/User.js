import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3,
        required: true,
    },
    lastName: {
        type: String,
        minLength: 3,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    birthday: {
        type: Date
    },
    avatar: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

export default User;