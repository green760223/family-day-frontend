import env from "../config"
import axios, { AxiosError } from "axios"
import storage from "../utils/storage"

// Create an axios instance
const instance = axios.create({
  timeout: 10000,
  timeoutErrorMessage: "Request Timeout",
  withCredentials: true,
})

// Request interceptors
instance.interceptors.request.use(
  (config) => {
    const accessToken = storage.get("accessToken")
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
    return response.data
  },
  (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.code === "Token has expired"
    ) {
      storage.remove("accessToken")
      storage.remove("refreshToken")
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
