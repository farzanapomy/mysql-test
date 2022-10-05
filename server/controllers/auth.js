import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
  //check user

  const q = 'SELECT * FROM users WHERE email = ? OR username =?';

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) {
      req.json(err);
    }
    if (data.length) {
      req.status(409).json('User Already Exists!');
    }

    // bcrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO users(`username`,`email`,`password`) value(?)';
    const value = [req.body.username, req.body.email, hash];

    db.query(q, [value], (err, data) => {
      if (err) {
        req.json(err);
      }
      return res.status(200).json('User has been created');
    });
  });
};
export const login = (req, res) => {};
export const logOut = (req, res) => {};
