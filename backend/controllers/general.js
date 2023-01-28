const jwt = require('jsonwebtoken');
const { Teacher } = require("../models/Teacher");
const { Student } = require("../models/Student")


exports.me = (req, res) => {
    try {
        let access_token = req.headers['authorization'];
        let access = access_token.split(' ')[1];
        let payload = jwt.verify(access, api_key.accessToken);

        if (payload["type"] === "student") {
            const stuId = payload["userId"];
            Student.findById(stuId).then((_student) => {
                if (_student) {
                    return res.status(203).json({
                        data: _student,
                        type: "student"
                    })
                }
            })


        } else if (payload["type"] === "teacher") {
            const teacherId = payload["userId"];
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