const { Teacher } = require("../models/Teacher");
const { Class } = require("../models/Class");
const { Teaches } = require("../models/Teaches");
const { Subject } = require("../models/Subject");
const {Student} = require("../models/Student");
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
        // const { classTeacher } = req.body;
        // const { subjects } = req.body;

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        var subjectId = [];
        // Subject.find({ name: { $in: subjects } }).then((_subjects) => {
        //     subjectId = _subjects.map((sub) => sub._id);
        // })

        // var teacherId;
        // Teacher.find({ email: classTeacher }).then((_teacher) => {
        //     teacherId = _teacher._id;
        // })

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
            joiningCode: code
        })
        NewClass.save();
        return res.status(203).json({
            message: "class Created",
            data: NewClass
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

// class teacher by class grade
exports.getClassTeacher = (req, res) => {
    try {
        const { grade } = req.param;
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
    } catch (err) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}


// Getting teacher by name of subject

exports.getTeachersBySubject = (req, res) => {
    try {
        const { subject } = req.param;
        Teaches.findOne({ name: subject }).then((_subject) => {
            Teacher.find({ subjects: _subject._id }).then((_teachers) => {
                if (_teachers) {
                    return res.status(203).json({
                        message: `All teacher with ${subject} subject`,
                        data: _teachers
                    })
                } else {
                    return res.status(203).json({
                        message: `There are no teachers with ${subject} subject`,
                        data: []
                    })
                }
            })
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

exports.getTeachersByClass = (req, res) => {

    try {
        const { grade } = req.param;
        Class.findOne({ grade }).then((_class) => {
            Teaches.find({ class: _class._id }).then((_teachers) => {
                if (_teachers) {
                    return res.status(203).json({
                        message: `All teacher with ${grade} class`,
                        data: _teachers
                    })
                } else {
                    return res.status(203).json({
                        message: `There are no teachers with class`,
                        data: []
                    })
                }
            })
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

exports.getSubjectsByClass = (req, res) => {
    try {
        const { grade } = req.body;
        Class.findOne({ grade }).then((_class) => {
            const subjects = _class.subjects;
            Subject.find({ _id: subjects }).then((_subjects) => {
                if (_subjects) {
                    return res.status(203).json({
                        message: `All subject with ${grade} class`,
                        data: _subjects
                    })
                } else {
                    return res.status(203).json({
                        message: `There are no teachers with class`,
                        data: []
                    })
                }
            })
        })

    } catch (error) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}

exports.getAllTeachers = (req, res) => {
    try {
        Teacher.find().then((_teachers) => {
            return res.status(203).json({
                data: _teachers
            })
        })
    } catch (error) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}

exports.getAllClass = (req, res) => {
    try {
        Class.find().then((_classes) => {
            return res.status(203).json({
                data: _classes
            })
        })
    } catch (error) {
        (err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        };
    }
}


exports.getStudentsByClass = (req , res) => {
    try {
        const { grade } =req.params;
        Class.findOne({grade}).then((_class) => {
            var code = _class.joiningCode;
            Student.find({code}).then((_students) =>{
                return res.status(203).json({
                    data: _students
                })
            })
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