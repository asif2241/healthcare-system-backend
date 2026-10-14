import { Router } from "express";
import { AdminController } from "./admin.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { updateAdminZodSchema } from "./admin.validation";

const AdminRoutes = Router();

AdminRoutes.get("/",
    AdminController.getAllAdmins
)

AdminRoutes.get("/:id",
    AdminController.getAdminById
)

AdminRoutes.patch("/:id",
    validateRequest(updateAdminZodSchema),
    AdminController.updateAdmin
)

AdminRoutes.delete("/:id",
    AdminController.deleteAdmin
)