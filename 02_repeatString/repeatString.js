const repeatString = function(input, number) {
    let output = '';
    if(number < 0) return "ERROR"
    while(number){
        output+=input;
        number--;
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
