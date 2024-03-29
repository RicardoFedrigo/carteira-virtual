module.exports = {
  apps: [
    {
      name: "Carteira Virtual",
      script: "./build/src/index.js",
      max_memory_restart: "200M",
      instances: 1,
      watch: true,
      max_restarts: 10,
      post_update: ["yarn", "Iniciando..."],
      ignore_watch: ["node_modules", "public"],
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
