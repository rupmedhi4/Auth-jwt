import { createTokenAndSaveCookie } from "../jwt/generateToken.js";
import User from "../models/user.model.js";



const signupOrLogin = async (req, res) => {
  try {
    const { name } = req.body;

    const token = createTokenAndSaveCookie("123", res)
    return res.status(201).json({
      message: "User created successfully",
      name,
      token
    });

  } catch (error) {
    console.error("Signup Error:", error.message);
    return res.status(500).json({
      message: "User creation failed",
      error: error.message
    });
  }
};



export { signupOrLogin };
