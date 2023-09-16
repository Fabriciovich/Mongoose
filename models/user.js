import { Schema, model } from "mongoose";
import { Person } from "./person.js";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type :String,
        required :true
    },
    password: {
        type: String,
        required: true

    },
    personId:{
        type: Schema.Types.ObjectId,
        ref: Person
    }
}, {
    timestamps: true,
    versionKey:false
})

const User = model('User', UserSchema)


export { User }