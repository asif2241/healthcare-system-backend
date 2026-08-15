/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";

const registerPatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;

    const result = await AuthService.registerPatient(payload);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Patient registerd successfully",
        data: result
    })
})

const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const result = await AuthService.loginUser(payload)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User logged In successfully!",
        data: result
    })
})


export const AuthController = {
    registerPatient,
    loginUser
}