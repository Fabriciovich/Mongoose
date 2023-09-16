// Importa las clases 'Schema' y 'model' desde la biblioteca 'mongoose'.
import { Schema, model } from "mongoose";

// Importa la clase 'Person' desde un archivo local './person.js'.
import { Person } from "./person.js";

// Define un nuevo esquema (Schema) llamado 'UserSchema' para el modelo de usuario.
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
    timestamps: true,      // Agrega campos de registro de tiempo 'createdAt' y 'updatedAt'.
    versionKey: false      // Evita que se agregue el campo '__v' para la versión del documento.
})

// Crea un modelo llamado 'User' utilizando el esquema 'UserSchema'.
const User = model('User', UserSchema)

// Exporta el modelo 'User' para que pueda ser utilizado en otros archivos.
export { User }
