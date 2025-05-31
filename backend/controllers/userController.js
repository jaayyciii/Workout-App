import mongoose from "mongoose";
import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  res.json({ message: "Login" });
};

export const signupUser = async (req, res) => {
  res.json({ message: "SignUp" });
};
