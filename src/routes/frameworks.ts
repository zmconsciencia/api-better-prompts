// src/routes/frameworks.ts
import { Router } from "express";
import Framework from "../models/Framework";
import { get } from "mongoose";
import { getFrameworks, createFramework, updateFramework, deleteFramework } from "../controllers/frameworksController";

const frameworksRoute = Router();

frameworksRoute.get("/", getFrameworks);

frameworksRoute.post("/", createFramework);

frameworksRoute.put("/:id", updateFramework);

frameworksRoute.delete("/:id", deleteFramework);

export default frameworksRoute;
