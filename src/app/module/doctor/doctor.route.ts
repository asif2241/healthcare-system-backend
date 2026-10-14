import { Router } from "express";
import { DoctorController } from "./doctor.controller";

export const DoctorRoutes = Router();

DoctorRoutes.get('/',
    // checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
    DoctorController.getAllDoctors
)

DoctorRoutes.get('/:id', DoctorController.getDoctorById)

DoctorRoutes.patch("/:id", DoctorController.updateDoctor)

DoctorRoutes.delete("/:id", DoctorController.deleteDoctor)