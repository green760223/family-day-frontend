import request from "../utils/request"
import { Login, Result } from "../types/api"

export default {
  login(params: Login.Params) {
    return request.post<Result>("/employee/token", params)
  },

  // register(params: Register.Params) {
  //   return request.post<Register.Params>("/register", params)
  // },

  // getUserInfo() {
  //   return request.get<User.UserInfo[]>("/users")
  // },
}
