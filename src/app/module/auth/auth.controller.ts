/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../shared/sendResponse";
import { tokenUtils } from "../../utils/token";

const registerPatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;

    const result = await AuthService.registerPatient(payload);

    const { accessToken, refreshToken, token, ...rest } = result;

    tokenUtils.setAccessTokenCookie(res, accessToken)
    tokenUtils.setRefreshTokenCookie(res, refreshToken)
    tokenUtils.setBetterAuthSessionCookie(res, token as string);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Patient registerd successfully",
        data: {
            token,
            accessToken,
            refreshToken,
            ...rest
        }
    })
})

const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const result = await AuthService.loginUser(payload)

    const { accessToken, refreshToken, token, ...rest } = result;

    tokenUtils.setAccessTokenCookie(res, accessToken)
    tokenUtils.setRefreshTokenCookie(res, refreshToken)
    tokenUtils.setBetterAuthSessionCookie(res, token as string);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User logged In successfully!",
        data: {
            token,
            accessToken,
            refreshToken,
            ...rest
        }
    })
})


export const AuthController = {
    registerPatient,
    loginUser
}