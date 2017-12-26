/**
 * Created by valerie on 12/19/17.
 */

var calc = function(num1, num2, calcType) {

    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType == "multiply") {
        return num1 * num2;
    }

};

console.log(calc(2,3,'add'));

var add = function(a,b){
    return a+b;
}

var multiply = function(a,b) {
    return a*b;
}

var calcNew = function(num1, num2, callback) {
    callback(num1, num2);

};

console.log(calc(2,3,add));