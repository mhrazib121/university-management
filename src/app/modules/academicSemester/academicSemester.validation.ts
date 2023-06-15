import { z } from 'zod';
import {
  monthNames,
  semesterCodes,
  semesterTitles,
} from './academicSemester.constants';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...semesterTitles] as [string, ...string[]], {
      required_error: 'title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...semesterCodes] as [string, ...string[]], {
      required_error: 'code is required',
    }),
    startMonth: z.enum([...monthNames] as [string, ...string[]], {
      required_error: 'start month is required',
    }),
    endMonth: z.enum([...monthNames] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
    // endMonth: z.enum([monthNames[0], ...monthNames.slice(1)], {
    //   required_error: 'end month is required',
    // }),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
