export const convertToCamelCase = (inputStr) => {
    let words = inputStr.split("_").map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    const camelCaseStr = words.join("");

    return camelCaseStr;
}