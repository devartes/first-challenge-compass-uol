import { Request, Response } from "express";
import Pet from "../models/pet.model";
import Tutor from "../models/tutor.model";

export const createPet = async (req: Request, res: Response) => {
  try {
    const { tutorId } = req.params;
    const petData = { ...req.body, tutor: tutorId };

    const pet = await Pet.create(petData);

    const tutor = await Tutor.findById(tutorId).populate({
      path: "pets",
    });

    if (tutor) {
      tutor.pets.push(pet);
      await tutor.save();
    }

    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }

    res.status(201).json(pet);
  } catch (error) {
    console.error("Error while creating pet:", error);
    res.status(500).json({ message: "Error while creating pet" });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    const pet = await Pet.findOneAndUpdate(
      { _id: petId, tutor: tutorId },
      req.body,
      { new: true }
    );
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: "Error while updating pet" });
  }
};

export const removePet = async (req: Request, res: Response) => {
  try {
    const { petId, tutorId } = req.params;
    const pet = await Pet.findOneAndDelete({ _id: petId, tutor: tutorId });
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json({ message: "Pet removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while removing pet" });
  }
};
