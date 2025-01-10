const config = {
  redirectUri:
    import.meta.env.MODE === "production"
      ? "http://localhost:3001/"
      : "http://localhost:5173/",
};

export default config;
