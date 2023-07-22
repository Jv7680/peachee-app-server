import { UserModel } from "./dataModel";
import { DataModel } from "./dataModel";
import { generateResponeData } from "../utils/functions";
import { successCode } from "../utils/manageCode/successCode";
import { errorCode } from "../utils/manageCode/errorCode";

let getAllData = async (req, res) => {
    let datas = await DataModel.getAllData();
    if (!datas) {
        return res.status(400).json(generateResponeData(errorCode.getAllData));
    }

    return res.status(200).json(generateResponeData(successCode.getAllData, datas.length > 0 ? datas : null));
};

let getDataByMonthAndYear = async (req, res) => {
    const { month, year } = req.query;

    if (!month || !year) {
        return res.status(400).json(generateResponeData(errorCode.missingParamKey));
    }

    let datas = await DataModel.getDataByMonthAndYear(month, year);
    if (!datas) {
        return res.status(400).json(generateResponeData(errorCode.getDataBayMonthAndYear));
    }

    return res.status(200).json(generateResponeData(successCode.getDataBayMonthAndYear, datas.length > 0 ? datas : null));
};

let getDataByDayMonthAndYear = async (req, res) => {
    const { day, month, year } = req.query;

    if (!day || !month || !year) {
        return res.status(400).json(generateResponeData(errorCode.missingParamKey));
    }

    let datas = await DataModel.getDataByDayMonthAndYear(day, month, year);
    if (!datas) {
        return res.status(400).json(generateResponeData(errorCode.getDataByDayMonthAndYear));
    }

    return res.status(200).json(generateResponeData(successCode.getDataByDayMonthAndYear, datas[0]?.data));
};

let getCheckedDayByMonthAndYear = async (req, res) => {
    const { month, year } = req.query;

    if (!month || !year) {
        return res.status(400).json(generateResponeData(errorCode.missingParamKey));
    }

    let datas = await DataModel.getCheckedDayByMonthAndYear(month, year);
    if (!datas) {
        return res.status(400).json(generateResponeData(errorCode.getCheckedDayByMonthAndYear));
    }

    return res.status(200).json(generateResponeData(successCode.getCheckedDayByMonthAndYear, datas.length > 0 ? datas.map((item) => item.day) : null));
};

let createDataByDayMonthAndYear = async (req, res) => {
    const { day, month, year } = req.query;
    const { data } = req.body;

    if (!day || !month || !year) {
        return res.status(400).json(generateResponeData(errorCode.missingParamKey));
    }

    if (!data) {
        return res.status(400).json(generateResponeData(errorCode.missingBodyKey));
    }

    let isInserted = await DataModel.createDataByDayMonthAndYear(day, month, year, data);
    if (!isInserted) {
        return res.status(400).json(generateResponeData(errorCode.createDataByDayMonthAndYear));
    }

    return res.status(200).json(generateResponeData(successCode.createDataByDayMonthAndYear));
};

let updateDataByDayMonthAndYear = async (req, res) => {
    const { day, month, year } = req.query;
    const { data } = req.body;

    if (!day || !month || !year) {
        return res.status(400).json(generateResponeData(errorCode.missingParamKey));
    }

    if (!data) {
        return res.status(400).json(generateResponeData(errorCode.missingBodyKey));
    }

    let isUpdated = await DataModel.updateDataByDayMonthAndYear(day, month, year, data);
    if (!isUpdated) {
        return res.status(400).json(generateResponeData(errorCode.updateDataByDayMonthAndYear));
    }

    return res.status(200).json(generateResponeData(successCode.updateDataByDayMonthAndYear));
};

export const DataController = {
    getAllData,
    getDataByMonthAndYear,
    getDataByDayMonthAndYear,
    getCheckedDayByMonthAndYear,
    createDataByDayMonthAndYear,
    updateDataByDayMonthAndYear,
};
