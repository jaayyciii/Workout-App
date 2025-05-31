import mongoose from "mongoose";
import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  res.json({ message: "Login" });
};

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    if (!user) {
      return res.status(400).json({ error: "User creation failed" });
    }

    res.status(201).json({ email, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
