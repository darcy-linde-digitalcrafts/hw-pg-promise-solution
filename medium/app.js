const express = require("express");
const db = require("./db");
const es6Renderer = require("express-es6-template-engine");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.engine("html", es6Renderer);
app.set("view engine", "html");
app.use(bodyParser.json());

app.get("/tasks", async (_, res) => {
  const tasks = await db.getTasks();
  res.render("index", {
    locals: { tasks: tasks },
  });
});

app.post("/tasks", async (req, res) => {
  await db.insertTask(req.body.title);
  res.sendStatus(201);
});

app.patch("/tasks/:id/is_completed", (req, res) => {
  res.send("Patch task completed status");
});

app.patch("/tasks/:id/title", (req, res) => {
  res.send("Patch task title");
});

app.delete("/tasks/:id", async (req, res) => {
  await db.deleteTask(req.params.id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
