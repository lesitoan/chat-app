import mongoose from "mongoose";
import { genSalt, hash } from "bcrypt";

export interface User {
  _id?: string;
  email: string;
  userName: string;
  firstName?: string;
  lastName?: string;
  password: string;
  image?: string;
  color?: Number;
  profileSetup?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    image: { type: String, default: "" },
    color: { type: Number },
    profileSetup: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<User>("save", async function (next) {
    try {
        const salt = await genSalt(10);
        this.password = await hash(this.password, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;