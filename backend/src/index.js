import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config(); // loads the environment variables
const app = express();  // initializes an Express application
const PORT = process.env.PORT; // defines the server port

app.use(express.json()); // handles POST where body contains JSON
app.use(cookieParser()); // extract jwt from cookie
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use("/api/auth", authRoutes); // route nomenclature
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
    connectDB();
});

