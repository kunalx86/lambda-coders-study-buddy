const { Test } = require("../models/Test");
const { Student } = require("../models/Student")
const { TestResult } = require("../models/TestResult")

exports.submitTest = (req, res) => {
    /*
    {
        questions:{
            question
            correctOption
        },
        test,
        student,
    } 
    */

    const questions = req.body.questions;
    const test = req.body.test;
    const student = req.body.student;

    Test.findOne({ name: test }).then((_test) => {
        var totalScore = 0;
        var length = _test.questions.length;
        for (let i = 0; i < length; i++) {
            if (questions[i].correctOption == _test.questions[i].correctAnswer) {
                totalScore++;
            }
        }
        Student.findOne({ name: student }).then((_student) => {
            const NewResult = new TestResult({
                test: _test._id,
                totalMarks: length,
                obtainMarks: totalScore,
                student: _student._id
            })
            NewResult.save();

            return res.status(203).json({
                data: NewResult
            })

        })



    })


}

exports.getTest = (req, res) => {
    try {
        const { test } = req.body;
        Test.findOne({ name: test }).then((_test) => {
            return res.status(203).json({
                data: _test
            })
        })
    } catch (error) {

    }
}


