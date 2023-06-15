import { Model } from 'mongoose';

export type IUser = {
  id: string;
  role: string;
  password: string;
  // student?: Types.ObjectID |
};

export type UserModel = Model<IUser, Record<string, unknown>>;
