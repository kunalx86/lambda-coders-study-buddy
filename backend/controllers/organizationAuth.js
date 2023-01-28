const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === process.env.ADMIN_EMAIL) {
        if (password === process.env.ADMIN_PASS) {
            const access_token = jwt.sign(
                { email: email, type: "admin" },
                api_key.accessToken,
                {
                    algorithm: "HS256",
                    expiresIn: api_key.accessTokenLife,
                }
            );
            return res.status(201).json({
                message: "User logged in!",
                access_token: access_token,
                email: email,
            });
        } else {
            const error = new Error("Please enter valid password"); // User already exist
            error.statusCode = 403;
            error.data = {
                value: email,
                message: "Invalid password",

            };
            res.status(422).json({ message: error.data });
        }
    } else {
        const error = new Error("Please enter valid email id"); // User already exist
        error.statusCode = 403;
        error.data = {
            value: email,
            message: "Invalid email id",

        };
        res.status(422).json({ message: error.data });
    }
}


