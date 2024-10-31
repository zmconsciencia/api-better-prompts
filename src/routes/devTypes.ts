// src/routes/devTypes.ts
import { Router } from "express";
import DevType from "../models/DevType";
import { getDevTypes, createDevType, updateDevType, deleteDevType } from "../controllers/devTypesController";

const devTypesRoute = Router();

devTypesRoute.get("/", getDevTypes);

devTypesRoute.post("/", createDevType);

devTypesRoute.put("/:id", updateDevType);

devTypesRoute.delete("/:id", deleteDevType);


export default devTypesRoute;
