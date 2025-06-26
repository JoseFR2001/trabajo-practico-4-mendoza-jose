import express from "express"
import dotenv from "dotenv"
import { initDB } from "./src/config/database";
import routeCharacter from "./src/routes/charater.routes";


dotenv.config()

const app = express();
app.use(express.json())

app.use("/", routeCharacter)
const PORT = process.env.PORT;

initDB().then(() =>  {
    app.listen(PORT, () =>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    })
    
})