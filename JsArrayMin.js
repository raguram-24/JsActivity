const numArrayMin = [2,4,1,45,67,55];
numArrayMin.sort(function(num1,num2){return num1 - num2});
document.getElementById("question-13-2").innerHTML = "Minimum number is"+" "+numArrayMin[0];