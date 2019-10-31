const convert = (str) => str.split('').join(' ');
/**
 * 
 * @param {String} str | The string to be converted
 * @param {Boolean} shouldTrim | Trim whitespace on either side of given string
 * 
 */
const chillWave = (str, shouldTrim = true) => {
    return shouldTrim
        ? convert(str.trim())
        : convert(str);
};
