function clearDisplay(){
    document.getElementById("display").value = "";
}

const x = document.getElementById("display");
function appendtoDisplay(ind){
    x.value += ind;
}

function Calculate(){
    try{
   x.value =  eval(x.value);
}
catch{
    x.value = "Error";
}
}