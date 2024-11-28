/**
 * @description: 環境配置
 */

type ENV = "dev" | "stg" | "prod"

const env = (document.documentElement.dataset.env as ENV) || "stg"

const config = {
  dev: {
    baseAPI: "/api",
    uploadAPI: "",
    mock: false,
    cnd: "",
    mockAPI: "",
  },
  stg: {
    baseAPI: "/api",
    uploadAPI: "",
    mock: false,
    cnd: "",
    mockAPI: "",
  },
  prod: {
    baseAPI: "",
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
