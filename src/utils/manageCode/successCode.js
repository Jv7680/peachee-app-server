import { generateCode } from "../functions";

export const successCode = {
    getAllData: generateCode(201, "Lấy tất cả data"),
    getDataBayMonthAndYear: generateCode(202, "Lấy data theo tháng và năm"),
    getDataByDayMonthAndYear: generateCode(203, "Lấy data theo ngày tháng và năm"),
    getCheckedDayByMonthAndYear: generateCode(204, "Lấy ngày theo tháng và năm"),
    createDataByDayMonthAndYear: generateCode(205, "Thêm data theo ngày tháng và năm"),
    updateDataByDayMonthAndYear: generateCode(206, "Cập nhật data theo ngày tháng và năm"),

    refreshAccessToken: generateCode(203, "Refresh access token successfully"),
    getProfileSuccess: generateCode(204, "Get user profile successfully"),
    updateProfileSuccess: generateCode(205, "Update user profile successfully"),
    updatePasswordSuccess: generateCode(206, "Update user password successfully"),
    updateBestScoreSuccess: generateCode(207, "Update user best score successfully"),
    sendMailSuccess: generateCode(208, "Send mail successfully"),
    getRankListSuccess: generateCode(209, "Get rank list successfully"),
    checkUserExistSuccess: generateCode(210, "Check user exist successfully"),
};

