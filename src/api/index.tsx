import request from "../utils/request"
import { Login, Result } from "../types/api"

export default {
  login(params: Login.Params) {
    return request.post<Result>("/employee/token", params)
  },

  verifyToken(params: object) {
    return request.get<string>("/employee/verify-token", params)
  },

  // getUserInfo() {
  //   return request.get<User.UserInfo[]>("/users")
  // },
}
