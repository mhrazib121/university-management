import { Request, Response } from 'express';
import { UserServices } from './users.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUsers(user);
    // return result;
    res.status(200).json({
      status: 'Success',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error khaici',
    });
  }
};

export const UserController = {
  createUser,
};
