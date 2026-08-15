import { Router } from "express";
import { AuthController } from "./auth.controller";

export const AuthRoute = Router()

AuthRoute.post("/register", AuthController.registerPatient)
AuthRoute.post("/login", AuthController.loginUser)