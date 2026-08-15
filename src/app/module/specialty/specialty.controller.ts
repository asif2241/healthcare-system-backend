/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { SpecialtyService } from "./specialty.service";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Specialty created successfully!",
        data: result
    })
})

const getAllSpecialties = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await SpecialtyService.getAllSpecialties();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All Specialty Retrieve successfully!",
        data: result
    })
})

const deleteSpecialty = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await SpecialtyService.deleteSpecialty(id as string);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Specialty Deleted Successfully!",
        data: result
    })
})

export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty
}