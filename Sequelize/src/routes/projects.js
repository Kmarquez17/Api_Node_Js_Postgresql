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
router.put("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);

export default router;