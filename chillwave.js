function chillWaveString(myString) {
    let newString = '';

    for (let i = 0; i < myString.length; i++) {
        let char = myString[i];
        if (char === ' ') {
            newString += '   ';
        } else {
            newString += char + ' ';
        }
    }

    return newString;
}