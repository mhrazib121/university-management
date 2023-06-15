import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  monthNames,
  semesterCodes,
  semesterTitles,
} from './academicSemester.constants';
import ApiError from '../../../errors/ApiError';
import status from 'http-status';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: semesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: semesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: monthNames,
    },
    endMonth: {
      type: String,
      required: true,
      enum: monthNames,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.find({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'This Semester already exist !');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
