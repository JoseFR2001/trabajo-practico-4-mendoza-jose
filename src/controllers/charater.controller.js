import Character from "../models/character.model";

export const createCharate = async(req, res) => {
    try {
        const createCharate = await Character.creater(req.body)
        res.status(201).json(createCharate)
    }catch (error){
        res.status(500).json({error : error.massege})
    }
}

export const getAllCharater = async (req,res) => {
    try {
        const character = await Character.findAll();
        res.json(character);
    } catch (error) {
        res.status(500).json({error : error.massege})
    }
}

export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findByPk(req.params.id);
    if (character) res.json(character);
    else res.status(404).json({ message: "Charactero no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCharacter = async (req, res) => {
  try {
    const [updated] = await Character.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCharacter = await Character.findByPk(req.params.id);
      res.json(updatedCharacter);
    } else {
      res.status(404).json({ message: "Charactero no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletedCharacter = async (req, res) => {
  try {
    const deleted = await Character.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: "Charactero eliminado" });
    else res.status(404).json({ message: "Charactero no encontrado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};