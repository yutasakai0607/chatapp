import mongoose from "mongoose"
import { ENV } from "./env.js";

export const connectDB = async () => {
    try{
        const { MONGO_URI } = ENV;
        const conn = await mongoose.connect(MONGO_URI);
        console.log("MONGODB CONNECTED:", conn.connection.host);
    } catch (error) {
        console.error("Error connection to MONGODB:", error);
        process.exit(1);
    }
}