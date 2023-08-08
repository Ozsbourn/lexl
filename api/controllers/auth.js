import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt    from "jsonwebtoken";



///
/// Define controller for register user
///
///   It check the existing user and save new, if he don't exist
///
export const register = (req, res) => {
  const q = "SELECT * FROM blog.users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err.code);
    }
    if (data.length) {
      return res.status(409).json("Такой пользователь уже существует!");
    }
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Пользователь успешно создан!");
    });
  });
};

///
/// Controller for login existed users
///
///   Check that users existed and return data for himself w/ access_token by jwt
///
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    } 
    if (data.length === 0) {
      return res.status(404).json("Такого пользователя не существует, проверьте введённые данные!");
    }      

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Неправильное имя пользователя или пароль!");
    }
      
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        sameSite: 'none',
        secure: true
      })
      .status(200)
      .json(other);
  });
};

///
/// Controller for logout existed users
///
///   Just make the response that give the doing clear the access_token cookie on client-side
///
export const logout = (req, res) => {
  res.clearCookie('access_token',{
    sameSite: 'none',
    secure: true
  }).status(200).json("Вы вышли из своей учётной записи!")
};