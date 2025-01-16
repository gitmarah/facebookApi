import User from "../Models/users.js";

export const postUserData = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({"message": "Username and password required!"});
    const result = await User.create({
        email,
        password
    });
    res.status(200).json(result);
}

export const getUsers = async (req, res) => {
    const userData = await User.find();
    if(!userData) return res.status(400).json({"message": "Unable to fetch data!"});
    res.status(200).json(userData);
}