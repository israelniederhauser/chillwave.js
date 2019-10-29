function makeChillWaveString(string) {
    let chillWaveString = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === ' ') {
            chillWaveString += '   ';
        } else {
            chillWaveString += char + ' ';
        }
    }

    return chillWaveString;
}