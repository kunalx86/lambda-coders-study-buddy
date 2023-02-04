const jwt = require('jsonwebtoken');
const { Teacher } = require("../models/Teacher");
const { Student } = require("../models/Student")


exports.me = (req, res) => {
    try {
        console.log("here")
        console.log(req.headers)
        let access_token = req.headers['authorization'];
        let access = access_token.split(' ')[1];
        let payload = jwt.verify(access, process.env.ACCESS_TOKEN_SECRET);
        console.log("🚀 ~ file: general.js:13 ~ payload", payload)

        if (payload["type"] === "student") {
            const email = payload["email"];
            console.lo
            Student.findOne({ email }).then((_student) => {
                if (_student) {
                    return res.status(203).json({
                        data: _student,
                        type: "student"
                    })
                }
            })


        } else if (payload["type"] === "teacher") {
            const teacherId = payload["id"];
            Teacher.findById(teacherId).then((_teacher) => {
                if (_teacher) {
                    return res.status(203).json({
                        data: _teacher,
                        type: "student"
                    })
                }
            })
        }

    } catch (error) {

    }
}