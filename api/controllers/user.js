import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt    from "jsonwebtoken";

export const getUserInfo = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json("Вы не авторизованы!");
    }

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) {
        return res.status(403).json("Токен не является валидным!");
        }

        const q =
        "SELECT username, img from users where ? and ?";

        const values = [
        req.body.username,
        req.body.email,
        ];

        db.query(q, [values], (err, data) => {
        if (err) 
            return res.status(500).json("Что-то пошло не так!");
        return res.status(200).json(data);
        });
    });
};

export const updateUserInfo = (req, res) => {
    //
};
