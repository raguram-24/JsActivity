const numArrayMax = [2,4,6,45,67,55];
numArrayMax.sort(function(num1,num2){return num2 - num1});
document.getElementById("question-13-1").innerHTML = "Maximum number is"+" "+numArrayMax[0];