import { Router } from "express";
import {
    getProjects,
    getProject,
    createProjects,
    updateProject,
    deleteProject
} from "../controllers/projects.controller";

const router = Router();

router.post("/create", createProjects);
router.get("/", getProjects);
router.get("/:id", getProject);
router.delete("/delete/:id", deleteProject);
router.put("/update/:id", updateProject);

export default router;