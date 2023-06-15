import { RequestHandler } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...semester } = req.body;
    const result = await AcademicSemesterServices.createSemesters(semester);

    res.status(200).json({
      status: 'Academic semester created Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
