const { Teacher } = require("../models/Teacher");
const { Class } = require("../models/Class");
const { Teaches } = require("../models/Teaches");
const { Subject } = require("../models/Subject");
const bcrypt = require("bcryptjs");



exports.createTeacher = (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;

        Teacher.findOne({ email: email }).then((_teacher) => {
            if (!_teacher) {
                bcrypt
                    .hash("init@123", 12)
                    .then((hashedPassword) => {
                        const NewTeacher = new Teacher({
                            name: name,
                            email: email,
                            password: hashedPassword
                        })
                        NewTeacher.save();
                        return res.status(203).json({
                            message: "Teacher Created",
                            data: NewTeacher
                        })
                    })

            } else {
                const error = new Error("Teacher with this email id already exist"); // User already exist
                error.statusCode = 403;
                error.data = {
                    value: email,
                    message: "Invalid Email id",

                };
                res.status(422).json({ message: error.data });
            }
        })
    } catch (err) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}

exports.createClass = (req, res) => {

    try {
        const { grade } = req.body;
        const { name } = req.body;
        const { classTeacher } = req.body;
        const { subjects } = req.body;

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        var flag = true;
        let code = ' ';

        while (flag) {
            code = '';
            const charactersLength = characters.length;
            for (let i = 0; i < 5; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            Class.findOne({ joiningCode: code }).then((_class) => {
                if (_class) {
                    flag = true;
                } else {
                    flag = false;
                }
            })
        }
        const NewClass = new Class({
            grade,
            name,
            classTeacher,
            subjects,
            joiningCode: code
        })
        NewClass.save();

    } catch (err) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}

// class teacher by class grade
exports.getClassTeacher = (req, res) => {
    try {
        const { grade } = req.body;
        Class.findOne({ grade }).then((_class) => {
            if (_class) {
                const teacherId = _class.classTeacher;
                Teacher.findById(teacherId).then((_teacher) => {
                    return res.status(203).json({
                        data: _teacher
                    })
                })

            } else {
                const error = new Error("class does not exist"); // User already exist
                error.statusCode = 403;
                error.data = {
                    value: email,
                    message: "Invalid class grade",

                };
                res.status(422).json({ message: error.data });
            }
        })
    } catch (error) {

    }
}


// Getting teacher by name of subject

exports.getTeachersBySubject = (req, res) => {
    try {
        const { subject } = req.body;
        Teaches.findOne({ name: subject }).then((_subject) => {
            Teacher.find({ subjects: _subject._id }).then((_teachers) => {
                if (_teachers) {

                }
            })
        })

    } catch (error) {

    }
}

