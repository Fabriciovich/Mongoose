// Importa la función 'connect' desde la biblioteca 'mongoose'.
import { connect } from "mongoose";

// Define una función llamada 'conectarDB' para conectar a la base de datos.
export const conectarDB = async () => {
    try {
        // Utiliza la función 'await' para conectarse a la base de datos MongoDB en la URL especificada.
        await connect('mongodb://127.0.0.1:27017/alumnado')

        // Si la conexión tiene éxito, muestra un mensaje de éxito en la consola.
        console.log('database connection successfully')
    } catch (error) {
        // Si ocurre un error durante la conexión, muestra un mensaje de error en la consola.
        console.log('error connecting to database', error)
    }
}
