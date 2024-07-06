const reverseString = function(word) {
    let laenge = word.length;
    let resultString = "";

    for(i=0; i<laenge; i++){
        resultString += word.substring(word.length-1);
        word = word.substr(0, word.length-1);
    }   

    return resultString;
    
    //Lösung wär als oneliner möglich gewesen:
    // .split ==> StringMethode macht aus dem String ein Array
    // .reverse ==> ArrayMethode dreht die Reihenfolge des Arrays um
    // .join ==> ArrayMethode: macht aus dem Array ein zusammenhängenden String mit dem Trennzeichen "" (also ohne Trennzeichen)
    //Lösung:
    //==> return string.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
