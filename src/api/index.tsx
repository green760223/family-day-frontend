import request from "../utils/request"
import { Login, Result, Token, Employee, Notification } from "../types/api"

export default {
  login(params: Login.Params) {
    return request.post<Result>("/employee/token", params)
  },

  verifyToken(params: Token.Params) {
    return request.post<string>("/employee/token/verify", params)
  },

  getEmployeeInfo(params: string) {
    return request.get<Employee.Info>(`/employee/${params}`)
  },

  getGroupList(params: string) {
    return request.get<Employee.Info[]>(`/employee/group/members/${params}`)
  },

  checkInEmployee(params: string) {
    return request.post<Employee.Info>(`/employee/${params}/check-in`)
  },

  getLatestNotification() {
    return request.get<Notification.Info>("/employee/notifications/latest")
  },

  // getUserInfo() {
  //   return request.get<User.UserInfo[]>("/users")
  // },
}
