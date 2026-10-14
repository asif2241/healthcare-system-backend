/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { DoctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";
import { tr } from "zod/locales";

const getAllDoctors = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await DoctorService.getAllDoctor();

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Doctors fetched successfully",
        data: result
    })
})

const getDoctorById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;
    const doctor = await DoctorService.getDoctorById(id as string);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Doctor fetched successfully",
        data: doctor
    })
})

const updateDoctor = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const payload = req.body;

    const updatedDoctor = await DoctorService.updateDoctor(id as string, payload)

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Doctor updated successfully",
        data: updatedDoctor
    })
})

const deleteDoctor = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await DoctorService.deleteDoctor(id as string);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Doctor deleted successfully",
        data: result
    })
})

export const DoctorController = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}