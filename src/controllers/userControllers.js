
import User from "../models/user.js";

export const createUser = async (req, res) => {
    try {

        const { name, lastName, birthdate, phone, email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (findUser) {
            res.status(422).json({ code: 422, msg: "Email is already register" });
            return
        }
        if (!name || !lastName || !birthdate || !phone || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newUser = new User({
            name,
            lastName,
            birthdate,
            phone,
            email,
            password
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
