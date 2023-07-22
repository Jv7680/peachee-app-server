import express from "express";
import { DataController } from "./dataController";

const dataRouter = express.Router();

dataRouter.get("/get-all", DataController.getAllData);
dataRouter.get("/get-all-by-month-year", DataController.getDataByMonthAndYear);
dataRouter.get("/get-by-day-month-year", DataController.getDataByDayMonthAndYear);
dataRouter.get("/get-day-by-month-year", DataController.getCheckedDayByMonthAndYear);

dataRouter.post("/create-by-day-month-year", DataController.createDataByDayMonthAndYear);
dataRouter.patch("/update-by-day-month-year", DataController.updateDataByDayMonthAndYear);

export default dataRouter;