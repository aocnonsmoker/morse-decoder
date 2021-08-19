const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];
    let result = '';
    for (let i = 0, charsLength = String(expr).length; i < charsLength; i += 10) {
        arr.push(String(expr).substring(i, i + 10));
    }
    arr.forEach((item) => {
        const substr = [];
        let morse = '';
        if (item !== '**********') {
            for (let i = 0, charsLength = item.length; i < charsLength; i += 2) {
                substr.push(String(item).substring(i, i + 2));
            }
            for (let i = 0; i < substr.length; i++) {
                if (substr[i] == '10') {
                    morse += '.'
                }
                if (substr[i] == '11') {
                    morse += '-'
                }
            }
            if (MORSE_TABLE[morse] !== undefined) {
                result += MORSE_TABLE[morse]
            }
        } else {
            result += ' '
        }
    });
    return result;
}

module.exports = {
    decode
}