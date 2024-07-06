const fibonacci = function(input) {
    let n = parseInt(input);
    if(n<0){return "OOPS";}else{
        if(n === 0) return 0;
        if(n === 1 || n === 2) return 1;

        let fnMinus1 = 1;
        let fnMinus2 = 1;
        let fnhelp = 0;
        let FiboValueForN = 0;

        for (i=2; i<n;i++){
            FiboValueForN = fnMinus1 + fnMinus2;
            fnhelp = fnMinus1;
            fnMinus1 = FiboValueForN
            fnMinus2 = fnhelp;
        }

        return FiboValueForN;
    }
};

// Do not edit below this line
module.exports = fibonacci;
