import { Router } from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";

export const UserRoutes = Router()

UserRoutes.post("/create-doctor", validateRequest(createDoctorZodSchema), UserController.createDoctor)