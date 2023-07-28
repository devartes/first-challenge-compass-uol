import { Router } from "express";
import {
  getAllTutors,
  createTutor,
  updateTutor,
  deleteTutor,
} from "../controllers/tutor.controller";
import { createPet, updatePet, removePet } from "../controllers/pet.controller";

const router = Router();

router.get("/tutors", getAllTutors);
router.post("/tutor", createTutor);
router.put("/tutor/:id", updateTutor);
router.delete("/tutor/:id", deleteTutor);
router.post("/pet/:tutorId", createPet);
router.put("/pet/:petId/tutor/:tutorId", updatePet);
router.delete("/pet/:petId/tutor/:tutorId", removePet);

export default router;
