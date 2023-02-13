const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

function decode(expr) {
  if (!arguments.length || !expr.length) {
    return "";
  }

  let uncode = "";

  for (let i = 0; i < expr.length; i += 10) {
    let code = expr.slice(i, i + 10);
    let morseCode = "";

    for (let j = 0; j < code.length; j += 2) {
      let char = code.slice(j, j + 2);

      switch (char) {
        case "**":
          morseCode = " ";
          j = 10;
          break;
        case "10":
          morseCode += ".";
          break;
        case "11":
          morseCode += "-";
          break;
      }
    }

    uncode += MORSE_TABLE[morseCode];
  }

  return uncode;
}

module.exports = {
  decode,
};
