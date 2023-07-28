import { Request, Response } from "express";
import  Tutor from "../models/tutor.model";

export const getAllTutors = async (req: Request, res: Response) => {
  try {
    const tutors: typeof Tutor[] = await Tutor.find().populate("pets");
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ message: "Error while fetching tutors" });
  }
};

export const createTutor = async (req: Request, res: Response) => {
  try {
    const tutor = await Tutor.create(req.body);
    res.status(201).json(tutor);
  } catch (error) {
    console.error("Error while creating tutor:", error);
    res.status(500).json({ message: "Error while creating tutor" });
  }
};

export const updateTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findByIdAndUpdate(id, req.body, { new: true });
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.status(200).json(tutor);
  } catch (error) {
    res.status(500).json({ message: "Error while updating tutor" });
  }
};

export const deleteTutor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tutor = await Tutor.findByIdAndDelete(id);
    if (!tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    res.status(200).json({ message: "Tutor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error while deleting tutor" });
  }
};
