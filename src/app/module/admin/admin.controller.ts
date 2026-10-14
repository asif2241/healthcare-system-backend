/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AdminServices } from "./admin.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const getAllAdmins = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await AdminServices.getAllAdmins();

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Admins retrive successfully",
        data: result
    })
})

const getAdminById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const admin = await AdminServices.getAdminById(id as string)

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Admin retrive successfully",
        data: admin
    })
})


const updateAdmin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const payload = req.body

    const result = await AdminServices.updateAdmin(id as string, payload)

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Admin updated successfully",
        data: result
    })
})

const deleteAdmin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = req.user;

    const result = await AdminServices.deleteAdmin(id as string, user);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Admin deleted successfully",
        data: result
    })
})

export const AdminController = {
    getAllAdmins,
    updateAdmin,
    deleteAdmin,
    getAdminById,
};