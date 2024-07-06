const repeatString = function(frase, amount) {
   let result="";
   if(amount<0){
        return "ERROR";
   } else{ 
        for(i=0; i<amount; i++){
            result += frase;
        }
            return result;
        }
};

// Do not edit below this line
module.exports = repeatString;
