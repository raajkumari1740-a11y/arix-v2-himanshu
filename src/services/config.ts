export const Config = {
  APP_NAME: "Arix Panel",
  VERSION: "2.0.0",

  API_URL:
    import.meta.env.VITE_API_URL || "/api",

  WS_URL:
    import.meta.env.VITE_WS_URL || "ws://localhost:8080",

  THEME: "dark",
};

export default Config;
