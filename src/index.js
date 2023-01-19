const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let encoded = '';
    let character = '';
    const space = "**********";
    for (let i = 0; i < expr.length; i += 10) {
        result = expr.slice(i, i + 10);
        if (result === space) {
            encoded += ' ';
        } else {
            for (let j = 0; j < result.length; j++) {
                let countJ = j + 1;
                if (result[j] === '1' && result[countJ] === '0') {
                    character += '.';
                    j++;
                } else if (result[j] === '1' && result[countJ] === '1') {
                    character += '-';
                    j++;
                } else {
                    continue;
                }
            }
            encoded += MORSE_TABLE[character];
            character = '';
        }
    }
    return encoded;
}

module.exports = {
    decode
}