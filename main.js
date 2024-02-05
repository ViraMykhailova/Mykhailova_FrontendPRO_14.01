function addNumber () {
    let result = 0;

    function add (x) {
        result += x;
        console.log(result);
    }

    return add;

}
let sum = addNumber();
sum(1);
sum(3);
sum(20);