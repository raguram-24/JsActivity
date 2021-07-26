let num1 = 20;
let num2 = 4;
function addNum(a,b){
    return a + b;
}
document.getElementById('question-2-addition').innerHTML = addNum(num1,num2);
function multiNum(c,d){
    return c*d;
}
document.getElementById('question-2-multiple').innerHTML = multiNum(num1,num2);
function subtractNum(g,h){
    return g-h;
}
document.getElementById('question-2-subtraction').innerHTML = subtractNum(num1,num2);
function divideNum(e,f){
    return e/f;
}
document.getElementById('question-2-division').innerHTML = divideNum(num1,num2);