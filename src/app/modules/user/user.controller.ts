import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await usersS
}