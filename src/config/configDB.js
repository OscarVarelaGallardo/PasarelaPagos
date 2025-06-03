import mongoose from 'mongoose'


 const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
     
    } catch (error) {
        //Terminar proceso asincrono
        process.exit(1)
    }
}

export default connectDB;