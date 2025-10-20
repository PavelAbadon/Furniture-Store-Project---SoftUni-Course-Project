import { Schema, model } from "mongoose";

const userShema = new Schema({
    email:{
        type: String,
        required: [true, 'Email е задължителено поле'],

    },
    password:{
        type: String,
        required: [true, 'Password е задължителено поле'],
    }
})

const User = model('User', userShema);

export default User;