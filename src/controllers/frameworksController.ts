import { Request, Response } from "express";
import Framework from "../models/Framework";

export const getFrameworks = async (req: Request, res: Response) => {
  try {
    const { devType } = req.query;
    let query = Framework.find();

    if (devType) {
      query = query.where("DevTypeId").equals(devType);
    }

    const frameworks = await query.populate("DevTypeId");
    res.json(frameworks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createFramework = async (req: Request, res: Response) => {
  try {
    const framework = new Framework(req.body);
    await framework.save();
    res.status(201).json(framework);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFramework = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const framework = await Framework.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(framework);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFramework = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Framework.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
