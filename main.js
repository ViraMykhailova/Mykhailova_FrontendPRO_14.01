
function pow (number, degree) {
    if(degree === 0) {
        return 1;
    } else if(degree === 1) {
        return number;
    } else {
        return number * pow(number , degree - 1);
    }

}
console.log(pow(2,7));