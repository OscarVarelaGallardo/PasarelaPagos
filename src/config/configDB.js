import mongoose from 'mongoose'


 const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(`Base de datos conectada en: ${url}`)
    } catch (error) {
        //Terminar proceso asincrono
        console.error('Error al conectar a la base de datos:', error.message)
        process.exit(1)
    }
}

export default connectDB;