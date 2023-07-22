import pool from "../configs/connectDB";

const TABLE_NAME = "note_data";

const getAllData = async () => {
    try {
        let [dataRows] = await pool.execute(`select * from ${TABLE_NAME}`);

        return dataRows;
    }
    catch (error) {
        console.log("getAllData error", error);
        return false;
    }
};

const getDataByMonthAndYear = async (month, year) => {
    try {
        let [dataRows] = await pool.execute(`select * from ${TABLE_NAME} where month = ? and year = ?`, [month, year]);

        return dataRows;
    }
    catch (error) {
        console.log("getDataByMonthAndYear error", error);
        return false;
    }
};

const getDataByDayMonthAndYear = async (day, month, year) => {
    try {
        let [dataRows] = await pool.execute(`select * from ${TABLE_NAME} where day = ? and month = ? and year = ?`, [day, month, year]);

        return dataRows;
    }
    catch (error) {
        console.log("getDataByMonthAndYear error", error);
        return false;
    }
};

const getCheckedDayByMonthAndYear = async (month, year) => {
    try {
        let [dataRows] = await pool.execute(`select day from ${TABLE_NAME} where month = ? and year = ?`, [month, year]);

        return dataRows;
    }
    catch (error) {
        console.log("getCheckedDayByMonthAndYear error", error);
        return false;
    }
};

const createDataByDayMonthAndYear = async (day, month, year, data) => {
    try {
        await pool.execute(`insert into ${TABLE_NAME}(day, month, year, data) values(?, ?, ?, ?)`, [day, month, year, data]);
        return true;
    }
    catch (error) {
        console.log("createDataByDayMonthAndYear error", error);
        return false;
    }
};

const updateDataByDayMonthAndYear = async (day, month, year, data) => {
    try {
        await pool.execute(`update ${TABLE_NAME} set data = ? where day = ? and month = ? and year = ?`, [data, day, month, year]);
        return true;
    }
    catch (error) {
        console.log("updateDataByDayMonthAndYear error", error);
        return false;
    }
};

export const DataModel = {
    getAllData,
    getDataByMonthAndYear,
    getDataByDayMonthAndYear,
    getCheckedDayByMonthAndYear,
    createDataByDayMonthAndYear,
    updateDataByDayMonthAndYear,
};