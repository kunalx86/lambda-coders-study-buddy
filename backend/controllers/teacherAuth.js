const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Teacher } = require("../models/Teacher")
const Otp = require("../models/Otp");
const nodemailer = require("nodemailer");
const api_key = require("../config/config");




exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


    Teacher.findOne({ email: email }).then((user) => {
        bcrypt
            .compare(password, user.password)
            .then((matchPass) => {
                if (matchPass) {
                    const access_token = jwt.sign(
                        { email: email, type: "teacher", id: user._id },
                        api_key.accessToken,
                        {
                            algorithm: "HS256",
                            expiresIn: api_key.accessTokenLife,
                        }
                    );


                    return res.status(201).json({
                        message: "User logged in!",
                        access_token: access_token,
                        username: user.name,
                        userId: user._id,
                    });
                } else {
                    return res.status(401).json({ message: "password don't match" });
                }
            })

            .catch((err) => {
                (err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                };
            });
    })
};

