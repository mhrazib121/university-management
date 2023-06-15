import { Model } from 'mongoose';

export type monthNameType =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemester = {
  title: 'Autumn' | 'Summer' | 'Fall';
  year: number;
  code: '01' | 'O2' | '03';
  startMonth: monthNameType;
  endMonth: monthNameType;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
