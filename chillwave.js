function chillWaveString(string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === ' ') {
            newString += '   ';
        } else {
            newString += char + ' ';
        }
    }

    return newString;
}