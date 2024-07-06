const sumAll = function(a, b) {
    let result=0;

    //Überprüfe ob Argumente a und b Zahlen sind
    if(typeof a === "number" && typeof b === "number"){
        //Überprüfe ob Argumente a und b größer als 0 sind
        if(a>=0 && b >=0){
            //Wenn a kleine b starte mit a, sonst andersrum
            if(a<b){
                for(i=a; i<=b; i++){
                    result += i;
                }
                return result;
            } else{
                for(i=b; i<=a; i++){
                    result += i;
                }
                return result;
            }
        } else {return "ERROR";}
    } else {return "ERROR";}
};

// Do not edit below this line
module.exports = sumAll;
