require('dotenv').config(); // Ensure this is at the top of the file

const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helper for consistent responses
const sendResponse = (res, status, success, message, data = {}) => {
    return res.status(status).json({ success, message, ...data });
};

exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return sendResponse(res, 400, false, "All fields are required");
        }

        if (password.length < 8) {
            return sendResponse(res, 400, false, "Password must be at least 8 characters long");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return sendResponse(res, 409, false, "User already registered. Please log in.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        return sendResponse(res, 201, true, "User created successfully", {
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Create user error:", error);
        return sendResponse(res, 500, false, "Server error while creating user");
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return sendResponse(res, 400, false, "Email and password are required");
        }

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            console.log(`User not found for email: ${email}`);
            return sendResponse(res, 404, false, "User not found. Please sign up.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return sendResponse(res, 401, false, "Incorrect password");
        }

        // Check if JWT_SECRET is defined
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            console.error("JWT_SECRET not defined in environment variables.");
            return sendResponse(res, 500, false, "Server configuration error: Missing JWT secret");
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            jwtSecret,
            { expiresIn: '7d' }
        );

        return sendResponse(res, 200, true, "Login successful", {
            token,
            role: user.role,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        return sendResponse(res, 500, false, "Server error while logging in");
    }
};
