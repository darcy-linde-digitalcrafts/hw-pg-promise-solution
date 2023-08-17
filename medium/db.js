const pgp = require("pg-promise")();

const cn = {
  host: "localhost",
  port: 5432,
  database: "todo_app",
  user: "darcylinde",
  password: "",

  // to auto-exit on idle, without having to shut-down the pool;
  allowExitOnIdle: true,
};

const db = pgp(cn);

const getTasks = async () => {
  const tasks = await db.any("SELECT * FROM tasks");
  return tasks;
};

const insertTask = async (title) => {
  db.none("INSERT INTO tasks (title) VALUES ($1)", title);
};

const updateTaskStatus = async (id, status) => {
  db.none("UPDATE tasks SET is_completed = $1 WHERE id = $2", [status, id]);
};

const updateTaskTitle = async (id, title) => {
  db.none("UPDATE tasks SET title = $1 WHERE id = $2", [title, id]);
};

const deleteTask = async (id) => {
  db.none("DELETE FROM tasks WHERE id = $1", id);
};

module.exports = {
  getTasks,
  insertTask,
  updateTaskStatus,
  updateTaskTitle,
  deleteTask,
};
