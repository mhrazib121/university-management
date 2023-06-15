import ApiError from '../../../errors/ApiError';
import { SemesterTitleCodeMap } from './academicSemester.constants';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';
import httpStatus from 'http-status';

const createSemesters = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (SemesterTitleCodeMap[payload.title] !== payload.code) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Invalid Semester code. Semester code should be ${
        SemesterTitleCodeMap[payload.title]
      }`
    );
  }
  const result = await AcademicSemester.create(payload);

  return result;
};
export const AcademicSemesterServices = {
  createSemesters,
};
