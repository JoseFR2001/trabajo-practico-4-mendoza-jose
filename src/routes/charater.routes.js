import { Router } from "express";
import {
    createdCharacters,
    getAllCharacter,
    getCharacterById,
    updateCharacter,
    deletedCharacter
} from "../controllers/charater.controller"

const routeCharacter = Router()

routeCharacter.post("/", createdCharacters)
routeCharacter.get("/", getAllCharacter)
routeCharacter.get("/:id",getCharacterById)
routeCharacter.put("/id:", updateCharacter)
routeCharacter.delete("/:id", deletedCharacter)

export default routeCharacter;