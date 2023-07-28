import { Request, Response } from "express";
import Pet from "../models/pet.model";
import Tutor from "../models/tutor.model";
import mongoose from "mongoose";


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
    res.status(500).json({ message: "Error while creating pet" });
  }
};

export const updatePet = async (req: Request, res: Response) => {
  try {
    const { petId } = req.params;

    const isValidObjectId = mongoose.Types.ObjectId.isValid(petId);

    if (!isValidObjectId) {
      return res.status(400).json({ message: "Invalid petId" });
    }

    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      req.body,
      { new: true }
    );

    if (!updatedPet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    const petWithoutInternalFields = updatedPet.toObject();
    delete petWithoutInternalFields._id;
    delete petWithoutInternalFields.__v;

    res.status(200).json(petWithoutInternalFields);
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
