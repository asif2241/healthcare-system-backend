import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";

const SpecialtyRoutes = Router();

SpecialtyRoutes.post('/', SpecialtyController.createSpecialty)
SpecialtyRoutes.get('/', SpecialtyController.getAllSpecialties)
SpecialtyRoutes.delete('/:id', SpecialtyController.deleteSpecialty)

export default SpecialtyRoutes