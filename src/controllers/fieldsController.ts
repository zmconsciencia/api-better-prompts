import { Request, Response } from "express";
import Field from "../models/Field";

export const getFields = async (req: Request, res: Response) => {
  try {
    const fields = await Field.find();
    res.json(fields);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createField = async (req: Request, res: Response) => {
  try {
    const field = new Field(req.body);
    const savedField = await field.save();
    res.status(201).json(savedField);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
