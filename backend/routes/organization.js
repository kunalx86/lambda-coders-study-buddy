const organizationController = require("../controllers/organization")

const express = require("express")
const Auth = require("../Authentication/is-auth");
const router = express.Router();

router.post("/createTeacher", Auth.authentication, organizationController.createTeacher);
router.post("/createClass", organizationController.createClass);
router.get("/getClassTeacher/:grade", Auth.authentication, organizationController.getClassTeacher)
router.get("/getTeachersBySubject/:subject", Auth.authentication, organizationController.getTeachersBySubject);
router.get("/getTeachersByClass/:grade", Auth.authentication, organizationController.getTeachersByClass);
router.get("/getAllTeachers", Auth.authentication, organizationController.getAllTeachers);
router.get("/getAllClass", Auth.authentication, organizationController.getAllClass);
router.get("/getStudentsByClass/:grade",Auth.authentication, organizationController.getStudentsByClass);

module.exports = router;