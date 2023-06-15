import { Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...semester } = req.body;
  const result = await AcademicSemesterServices.createSemesters(semester);

  res.status(200).json({
    status: 'Academic semester created Successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
};
