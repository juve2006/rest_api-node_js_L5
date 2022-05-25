import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users } from "./user.js";
dotenv.config();

export const login = (req, res) => {
    const { name, password } = req.body;
    const user = users.find(user => { return user.name === name && user.password === password });
    if (user) {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30d',
        });
        res.status(200).json({msg: 'accessToken', accessToken});
    } else {
        res.send('Username or password incorrect');
    }
}