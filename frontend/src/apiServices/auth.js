import { axiosNode } from "../axios";

class AuthAPIService {
  teacherLogin({ email, password }) {
    return axiosNode.post("/teacher/login", { email, password })
  }

  organizationLogin({ email, password }) {
    return axiosNode.post("/teacher/login", { email, password })
  }

  me() {
    return axiosNode.get("/me")
  }
}

export const authService = new AuthAPIService();