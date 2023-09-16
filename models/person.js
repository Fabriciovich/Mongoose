// Importa las clases 'Schema' y 'model' desde la biblioteca 'mongoose'.
import { Schema, model } from "mongoose";

// Define un nuevo esquema (Schema) llamado 'PersonSchema' para el modelo de persona.
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
    timestamps: true,      // Agrega campos de registro de tiempo 'createdAt' y 'updatedAt'.
    versionKey: false      // Evita que se agregue el campo '__v' para la versión del documento.
})

// Crea un modelo llamado 'Person' utilizando el esquema 'PersonSchema'.
const Person = model('Person', PersonSchema)

// Exporta el modelo 'Person' para que pueda ser utilizado en otros archivos.
export { Person }
