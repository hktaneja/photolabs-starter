const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

console.log("PostgreSQL Connection Configuration:");
console.log({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const app = require("./application")(ENV);
const server = require("http").Server(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
