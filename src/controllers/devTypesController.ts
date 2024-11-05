import { Request, Response } from "express";
import DevType from "../models/DevType";
import Framework from "../models/Framework";
import mongoose from "mongoose";

export const getDevTypes = async (req: Request, res: Response) => {
  try {
    const devTypes = await DevType.find();
    res.json(devTypes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createDevType = async (req: Request, res: Response) => {
  try {
    const devType = new DevType(req.body);
    await devType.save();
    res.json(devType);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDevType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const devType = await DevType.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(devType);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDevType = async (req: Request, res: Response) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { id } = req.params;

    const devType = await DevType.findById(id).session(session);
    if (!devType) {
      await session.abortTransaction();
      session.endSession();
      res.status(404).json({ error: "DevType not found" });
    }

    await DevType.findByIdAndDelete(id).session(session);
    await Framework.deleteMany({ DevType: id }).session(session);

    await session.commitTransaction();
    session.endSession();

    res.status(204).end();
  } catch (error: any) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: error.message });
  }
};
