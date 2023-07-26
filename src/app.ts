import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import Tutor from "./models/tutor.model";
import Pet from "./models/pet.model";
import bodyParser from "body-parser";
import { ConnectOptions } from "mongoose";
import "dotenv/config";

const app: Express = express();
const PORT: number = 5000;

app.use(bodyParser.json());

interface EnvVariables {
  MY_USERNAME: string;
  MY_PASSWORD: string;
  DB_URL: string;
}

const env: EnvVariables = process.env as any;

const username: string = env.MY_USERNAME;
const password: string = env.MY_PASSWORD;
const database: string = env.DB_URL;

if (!username || !password) {
  console.error(
    "As variáveis de ambiente MY_USERNAME e MY_PASSWORD não foram definidas corretamente."
  );
  process.exit(1);
}

const uri = `mongodb+srv://${username}:${password}@${database}.mongodb.net/`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

// GET Routes Get all tutors: /tutors

app.get("/tutors", async (req, res) => {
  try {
    const tutors = await Tutor.find().populate("pets");
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: "Erro ao recuperar tutores." });
  }
});

// POST Routes /tutor Example request body (all items required):

app.post("/tutor", async (req, res) => {
  try {
    const { id, name, phone, email, date_of_birth, zip_code } = req.body;
    const tutor = new Tutor({
      id,
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
    });
    await tutor.save();
    res.status(201).json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar um novo tutor." });
  }
});

// POST Routes /pet/:tutorId Example request body (all items required):

app.post("/pet/:tutorId", async (req, res) => {
  try {
    const { tutorId } = req.params;
    const { id, name, species, carry, weight, date_of_birth } = req.body;

    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor não encontrado." });
    }

    const pet = new Pet({
      id,
      name,
      species,
      carry,
      weight,
      date_of_birth,
    });

    tutor.pets.push(pet._id);

    await tutor.save();

    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar um novo pet." });
  }
});

// PUT Routes /tutor/:id Example request body (all items required):

app.put("/tutor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, email, date_of_birth, zip_code } = req.body;
    const tutor = await Tutor.findByIdAndUpdate(
      id,
      { name, phone, email, date_of_birth, zip_code },
      { new: true }
    );
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o tutor." });
  }
});

// PUT Routes /pet/:petId/tutor/:tutorId request body (all items required): status code 200

app.put("/pet/:petId/tutor/:tutorId", async (req, res) => {
  try {
    const { petId, tutorId } = req.params;
    const { id, name, species, carry, weight, date_of_birth } = req.body;
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor não encontrado." });
    }
    const petIndex = tutor.pets.findIndex(
      (pet) => pet._id.toString() === petId
    );
    if (petIndex === -1) {
      return res.status(404).json({ message: "Pet não encontrado." });
    }
    tutor.pets[petIndex].id = id;
    tutor.pets[petIndex].name = name;
    tutor.pets[petIndex].species = species;
    tutor.pets[petIndex].carry = carry;
    tutor.pets[petIndex].weight = weight;
    tutor.pets[petIndex].date_of_birth = date_of_birth;
    await tutor.save();
    res.json(tutor.pets[petIndex]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar as informações do pet." });
  }
});

// DELETE Routes: /tutor/:id

app.delete("/tutor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Tutor.findByIdAndRemove(id);
    res.json({ message: "Tutor excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir o tutor." });
  }
});

// DELETE Routes: /pet/:petId/tutor/:tutorId status code 200

app.delete("/pet/:petId/tutor/:tutorId", async (req, res) => {
  try {
    const { petId, tutorId } = req.params;
    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor não encontrado." });
    }
    const petIndex = tutor.pets.findIndex(
      (pet) => pet._id.toString() === petId
    );
    if (petIndex === -1) {
      return res.status(404).json({ message: "Pet não encontrado." });
    }
    tutor.pets.splice(petIndex, 1);
    await tutor.save();
    res.json({ message: "Pet excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir o pet." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
