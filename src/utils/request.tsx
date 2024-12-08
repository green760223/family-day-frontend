import env from "../config"
import axios, { AxiosError } from "axios"
import storage from "../utils/storage"

// Create an axios instance
const instance = axios.create({
  timeout: 10000,
  timeoutErrorMessage: "Request Timeout",
  withCredentials: true,
})

console.log("env", env)

// Request interceptors
instance.interceptors.request.use(
  (config) => {
    const accessToken = storage.get("token")
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }

    if (env.mock) {
      config.baseURL = env.mockAPI
    } else {
      config.baseURL = env.baseAPI
    }
    return {
      ...config,
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptors
instance.interceptors.response.use(
  (response) => {
    // const status = response.status
    // const data = response.data
    // console.log("===response===", status, data)

    return response.data
  },
  (error) => {
    console.log("===error===", error.response)
    if (
      error.response?.status === 401 ||
      error.response?.data?.detail === "Token has expired" ||
      error.response?.data?.detail === "Not authenticated"
    ) {
      storage.remove("token")
      // Redirect to login page
      window.location.href = "/#/login"
    }

    return Promise.reject(error)
  }
)

// Export the axios instance
export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, params)
  },
  post<T>(url: string, params?: object): Promise<T> {
    return instance.post(url, params)
  },
}
