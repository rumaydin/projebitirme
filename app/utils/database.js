import mongoose from "mongoose"

let isConnected = false

export async function connectToDB() {
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("MongoDB is already connected")
        return
    }
    try {
        await mongoose.connect(
            "mongodb+srv://rumeysa:Qsu4x3pjVf0UuZ6v@production.3yxth.mongodb.net/?retryWrites=true&w=majority&appName=production",
            {
                dbName: "kultursanat",
            }
        )
        isConnected = true
        console.log("MongoDB connected")
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error)
    }
}