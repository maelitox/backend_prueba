import Server from "./models/server.js";
import dotenv from "dotenv";

//configuramos las variables de ambiente
dotenv.config();

const server = new Server();