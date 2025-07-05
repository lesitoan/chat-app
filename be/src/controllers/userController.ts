import AppError from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import UserModel, { User } from "@/models/UserModel";
import { successResponse } from "@/types/BaseReponse";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, userName, password, passwordConfirm } = req.body;

    if (!email || !userName || !password || !passwordConfirm) {
      throw new AppError(
        400,
        "Email, userName, and password, passwordConfirm are required."
      );
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new AppError(400, "Email already exists.");
    }

    const newUser = new UserModel({
      email,
      userName,
      password,
    });

    await newUser.save();
    res.send(successResponse<User>(newUser));
  } catch (error) {
    next(error);
  }
};
