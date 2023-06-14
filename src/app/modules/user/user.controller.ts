import { Request, Response } from "express";
import { UserServices } from "./users.services";

const createUser = async (req: Request, res: Response) => {
    const user = req.body;
    const result = await UserServices.createUsers(user);
    // return result;
    res.status(200).json({
        status: "Success",
        data: result
    })
};

export const UserController = {
    createUser
}