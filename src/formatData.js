import { convertToCamelCase } from "./convertToCamelCase.js";

export const formattedData = (val) => {
    let valArr = [val];
    return valArr.map((result) => {
        const resultData = {};
        let resultArr = Object.keys(result);

        resultArr.forEach((val) => {
            resultData[convertToCamelCase(val)] = result[val];
        });

        return resultData;
    });
}