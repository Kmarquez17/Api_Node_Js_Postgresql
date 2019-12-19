import express, { json } from "express";
import morgan from "morgan";

//Routes
import ProjectRoutes from "./routes/projects";
import TasksRoutes from "./routes/tasks";

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(json());

app.use("/api/projects", ProjectRoutes);
app.use("/api/tasks", TasksRoutes);

export default app;
