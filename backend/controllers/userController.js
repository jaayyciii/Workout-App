import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// controller for user-related operations (login, signup, etc.)

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    // create a token for the user
    const token = createToken(user._id);
    // send the token in the response
    res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    // create a token for the user
    const token = createToken(user._id);
    // send the token in the response
    res.status(201).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
