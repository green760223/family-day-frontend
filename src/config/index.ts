/**
 * @description: 環境配置
 */

type ENV = "dev" | "stg" | "prod"

const env = (document.documentElement.dataset.env as ENV) || "stg"

const config = {
  dev: {
    baseAPI: "http://127.0.0.1:8000/api/v1",
    uploadAPI: "",
    routeBaseName: "http://localhost:5173/#",
    mock: false,
    cnd: "",
    mockAPI: "",
  },
  stg: {
    baseAPI: "http://127.0.0.1:8000/api/v1",
    routeBaseName: "http://localhost:5173/#",
    uploadAPI: "",
    mock: false,
    cnd: "",
    mockAPI: "",
  },
  prod: {
    baseAPI: "https://family-day-backend.onrender.com/api/v1",
    routeBaseName: "https://promate.legacy-taiwan.com/#",
    uploadAPI: "",
    mock: false,
    cnd: "",
    mockAPI: "",
  },
}

export default {
  env,
  ...config[env],
}
