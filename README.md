# hw-pg-promise-solution

## Setup

- `mkdir small && mkdir medium`
- `touch todo-app-db-setup.sql`
- Add code from HW to todo-app-db-setup.sql
- Connect to psql with `psql postgres`
- Run `\i todo-app-db-setup.sql` in the psql shell

> The backslash \ at the beginning of the command indicates that it's a psql
> meta-command rather than a SQL statement.
>
> When you run the \i command followed by the file name, psql will read the SQL
> statements from the specified file and execute them in the current database
> session.

- quit the psql shell with \q

## Small

- `cd small`
- `npm init -y`
- `npm i pg-promise`
- `touch main.js`

### index.js

- require pg-promise
- set up db config
- `db.any("SELECT * FROM tasks").then((tasks) => console.log(tasks));`

## Medium

- `cd ../medium`
- `npm init -y`
- `npm i express && npm i pg-promise`
- `touch app.js`
- Copy [hello world starter](https://expressjs.com/en/starter/hello-world.html)
  into app.js
- Add the express routes for the API without adding implementation.

```js
app.get("/tasks", (req, res) => {
  res.send("Get tasks");
});

app.post("/tasks", (req, res) => {
  res.send("Post tasks");
});

app.patch("/tasks/:id/is_completed", (req, res) => {
  res.send("Patch task completed status");
});

app.patch("/tasks/:id/title", (req, res) => {
  res.send("Patch task title");
});

app.delete("/tasks/:id", (req, res) => {
  res.send("Delete task");
});
```

- `touch db.js`
- Add pgp and a db cn with allowExitOnIdle

### Add HTML

- `npm i express-es6-template-engine`
- set up es6Renderer in app.js
- `mkdir views`
- `touch views/index.html`
- Add html for GET
- Add form for POST
- `npm i body-parser`
- app.use(bodyParser.json());

> [body-parser](https://expressjs.com/en/resources/middleware/body-parser.html)
>
> app.use(bodyParser.json());
> This line configures the body-parser middleware to parse incoming request
> bodies as JSON. It's used to handle requests where the data is sent in JSON
> format, typically with a Content-Type header of application/json.

- Add db insertTask function and export it

...
