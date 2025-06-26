import Character from "../models/character.model.js";

export const createdCharacters = async (req, res) => {
  try {
    const { name, ki, race, gender, description } = req.body;

    if (
      name === undefined ||
      ki === undefined ||
      race === undefined ||
      gender === undefined
    )
      return res.status(400).json({ message: "No debe ser vacio" });

    if (!Number.isInteger(ki))
      return res
        .status(400)
        .json({ message: "El campo 'ki' debe ser un número entero válido." });

    if (gender !== "Male" && gender !== "Female")
      return res
        .status(400)
        .json({ message: "El campo 'gender' debe ser 'Male' o 'Female'." });

    if (description && typeof description !== "string")
      return res.status(400).json({
        message: "El campo 'description' debe ser una cadena de texto.",
      });

    const existing = await Character.findOne({ where: { name } });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Ya existe un personaje con ese nombre." });
    }

    const createdCharacter = await Character.create(req.body);

    res.status(201).json(createdCharacter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCharacter = async (req, res) => {
  try {
    const character = await Character.findAll();
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
