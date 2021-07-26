var foods = ["rice","pizza","sandwich","rolls"];
foods.pop();
document.getElementById("question-16").innerHTML = foods;
foods.push("cake");
document.getElementById("question-16-1").innerHTML = foods;
foods.splice(0,1);
document.getElementById("question-16-2").innerHTML = foods;