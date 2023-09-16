// Importa el módulo 'express' y el middleware 'json' desde la librería 'express'.
import express, { json } from "express";

// Importa la función 'conectarDB' desde un archivo local './db.js'.
import { conectarDB } from "./db.js";

// Importa las clases 'User' y 'Person' desde archivos locales './models/user.js' y './models/person.js' respectivamente.
import { User } from "./models/user.js";
import { Person } from "./models/person.js";

// Crea una instancia de la aplicación Express.
const app = express();

// Define el puerto en el que la aplicación escuchará las solicitudes.
const port = 4000;

// Agrega el middleware 'json' para analizar las solicitudes JSON entrantes.
app.use(json());

// Llama a la función 'conectarDB' para conectar a la base de datos.
conectarDB();

// Define una ruta para manejar las solicitudes POST a '/person'.
app.post("/person", async (req, res) => {
  try {
    // Crea una nueva instancia de la clase 'Person' utilizando los datos de la solicitud.
    const person = new Person(req.body);

    // Guarda la instancia de 'Person' en la base de datos.
    await person.save();

    // Devuelve una respuesta JSON con los datos de la persona creada.
    return res.json(person);
  } catch (error) {
    // Si ocurre un error, devuelve un código de estado 500 y un mensaje de error.
    res.status(500).json("Internal server error");
    console.log(error);
  }
});

// Define una ruta para manejar las solicitudes POST a '/register'.
app.post("/register", async (req, res) => {
  try {
    // Crea una nueva instancia de la clase 'User' utilizando los datos de la solicitud.
    const user = new User(req.body);

    // Guarda la instancia de 'User' en la base de datos.
    await user.save();

    // Devuelve una respuesta JSON con los datos del usuario registrado.
    return res.json(user);
  } catch (error) {
    // Si ocurre un error, devuelve un código de estado 500 y un mensaje de error.
    res.status(500).json("Internal server error");
  }
});

// Define una ruta para manejar las solicitudes GET a '/users'.
app.get("/users", async (_req, res) => {
  try {
    // Busca todos los usuarios en la base de datos y realiza una población (populate) de la referencia 'personId' con el campo 'name'.
    const users = await User.find().populate("personId", "name");

    // Devuelve una respuesta JSON con los datos de los usuarios y sus referencias pobladas.
    return res.json({ data: users });
  } catch (error) {
    // Si ocurre un error, devuelve un código de estado 422 y un mensaje de error.
    res.status(422).json("Error");
  }
});

// Inicia el servidor Express en el puerto especificado y muestra un mensaje de confirmación en la consola.
app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
