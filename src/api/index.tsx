import request from "../utils/request"
import { Login, Result, Token, Employee } from "../types/api"


export default {
  login(params: Login.Params) {
    return request.post<Result>("/employee/token", params)
  },

  verifyToken(params: Token.Params) {
    return request.post<string>("/employee/token/verify", params)
  },

  getEmployeeInfo(params: string) {
    return request.get<Employee.Info>(`/employee/${params}`)
  }

  // getUserInfo() {
  //   return request.get<User.UserInfo[]>("/users")
  // },
}
