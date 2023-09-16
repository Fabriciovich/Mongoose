import { Schema, model } from "mongoose";

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey:false
})

const Person = model('Person', PersonSchema)


export { Person }