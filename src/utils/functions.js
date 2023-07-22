/* 
code: 0-fail 1-success
*/
export const generateResponeData = (codeData, data = null) => {
    const responeData = {
        status: codeData.code < 400 ? 200 : 400,
        code: codeData.code,
        message: codeData.message,
        data,
    };

    return responeData;
};

export const generateCode = (code, message) => {
    const codeData = {
        code,
        message: code < 400 ? `${message} thành công` : `${message} thất bại`,
    };

    return codeData;
};