import { connect } from "mongoose";

export const conectarDB = async ()=>{
    try {
       await connect('mongodb://127.0.0.1:27017/alumnado')
       console.log('database conection succsessfully')
    } catch (error) {
        console.log('error conecting to database', error)
    }
}