import { axiosNode } from "../axios";

class TeacherService {
  getClassStudents(grade) {
    return axiosNode.get(`/organization/getStudentByClass/${grade}`);
  }
 
  getAllTeachers() {
    return axiosNode.get("/organization/getAllTeachers");
  }
}

export const teacherService = new TeacherService();