const pgp = require("pg-promise")();
const cn = {
  host: "localhost",
  port: 5432,
  database: "todo_app",
  user: "darcylinde",
  password: "",
};

const db = pgp(cn);

db.any("SELECT * FROM tasks").then((tasks) => console.log(tasks));
