import express from "express";
import routes from "./Routes/routes.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";
import morgan from "morgan";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"))

app.use(routes);

app.use((req, res) => {
  res.status(200).send({ success: true, message: "estoy funcionando" });
});

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}`);
});

export default app;
