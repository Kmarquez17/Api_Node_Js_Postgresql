import { Router } from "express";
import {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    getTasksByProject
} from "../controllers/tasks.controller";

const router = Router();

router.post("/create", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

router.get("/project/:projectid", getTasksByProject);

export default router;